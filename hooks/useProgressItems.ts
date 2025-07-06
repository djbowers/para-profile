import { useState, useEffect } from 'react';
import { useSession } from '../contexts/AuthContext';
import {
  getProgressItems,
  createProgressItem,
  updateProgressItem,
  deleteProgressItem,
  moveProgressItem,
} from '../lib/api';
import type { ProgressItem } from '../types/progress';

type ProgressType = 'project' | 'area' | 'resource' | 'archived';

export function useProgressItems(type: ProgressType) {
  const session = useSession();
  const user = session?.user;
  const [items, setItems] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load items
  useEffect(() => {
    if (!user) {
      setItems([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getProgressItems(user.id, type)
      .then(setItems)
      .catch((err) => {
        setError(err.message);
        console.error('Error loading progress items:', err);
      })
      .finally(() => setLoading(false));
  }, [user, type]);

  // Add new item
  const addItem = async (item: Omit<ProgressItem, 'icon' | 'id'>) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const newItem = await createProgressItem(item, user.id, type);
      setItems((prev) => [newItem, ...prev]);
      return newItem;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
      throw err;
    }
  };

  // Update item
  const updateItem = async (
    id: string,
    updates: Partial<Omit<ProgressItem, 'icon' | 'id'>>
  ) => {
    try {
      const updatedItem = await updateProgressItem(id, updates);
      setItems((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
      return updatedItem;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
      throw err;
    }
  };

  // Delete item
  const removeItem = async (id: string) => {
    try {
      await deleteProgressItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
      throw err;
    }
  };

  // Move item to different type
  const moveItem = async (id: string, newType: ProgressType) => {
    try {
      const movedItem = await moveProgressItem(id, newType);
      setItems((prev) => prev.filter((item) => item.id !== id));
      return movedItem;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to move item');
      throw err;
    }
  };

  return {
    items,
    loading,
    error,
    addItem,
    updateItem,
    removeItem,
    moveItem,
    refetch: () => {
      if (user) {
        setLoading(true);
        getProgressItems(user.id, type)
          .then(setItems)
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    },
  };
}
