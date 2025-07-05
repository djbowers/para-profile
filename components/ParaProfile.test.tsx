import React from 'react'
import type { ProgressItem } from '@/types/progress'
import { composeStories } from '@storybook/react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import * as stories from './ParaProfile.stories'
import { ParaProfile } from './ParaProfile'

const { Default } = composeStories(stories)

interface MockCharacterProfileHeaderProps {
  totalLevel: number
  avgProgress: number
  activeItemsCount: number
}

interface MockParaSystemTabsProps {
  selectedTab: string
  onTabChange: (tab: string) => void
  projects: ProgressItem[]
  areas: ProgressItem[]
  resources: ProgressItem[]
  archived: ProgressItem[]
  onProjectsChange: (projects: ProgressItem[]) => void
  onAreasChange: (areas: ProgressItem[]) => void
  onResourcesChange: (resources: ProgressItem[]) => void
  onArchivedChange: (archived: ProgressItem[]) => void
}

// Mock the child components to focus on ParaProfile logic
vi.mock('@/components/CharacterProfileHeader', () => ({
  CharacterProfileHeader: ({
    totalLevel,
    avgProgress,
    activeItemsCount,
  }: MockCharacterProfileHeaderProps) => (
    <div data-testid="character-profile-header">
      <span data-testid="total-level">{totalLevel}</span>
      <span data-testid="avg-progress">{avgProgress}</span>
      <span data-testid="active-items-count">{activeItemsCount}</span>
    </div>
  ),
}))

vi.mock('@/components/ParaSystemTabs', () => ({
  ParaSystemTabs: ({
    selectedTab,
    onTabChange,
    projects,
    areas,
    resources,
    archived,
    onProjectsChange,
  }: MockParaSystemTabsProps) => (
    <div data-testid="para-system-tabs">
      <button data-testid="tab-change-button" onClick={() => onTabChange('areas')}>
        Change to Areas
      </button>
      <div data-testid="selected-tab">{selectedTab}</div>
      <div data-testid="projects-count">{projects.length}</div>
      <div data-testid="areas-count">{areas.length}</div>
      <div data-testid="resources-count">{resources.length}</div>
      <div data-testid="archived-count">{archived.length}</div>
      <button
        data-testid="add-project"
        onClick={() =>
          onProjectsChange([
            ...projects,
            { name: 'New Project', progress: 0, level: 1, xp: 0, maxXp: 1000, category: 'Test' },
          ])
        }
      >
        Add Project
      </button>
    </div>
  ),
}))

describe('ParaProfile', () => {
  it('renders the component with default story data', () => {
    render(<Default />)

    expect(screen.getByTestId('character-profile-header')).toBeInTheDocument()
    expect(screen.getByTestId('para-system-tabs')).toBeInTheDocument()
  })

  it('displays correct initial tab selection', () => {
    render(<Default />)

    expect(screen.getByTestId('selected-tab')).toHaveTextContent('projects')
  })

  it('calculates and displays correct total level from story data', () => {
    render(<Default />)

    // From the story data: projects (8+5+12+3=28) + areas (7+10+6+11=34) + resources (4+6+8+5=23) = 85
    expect(screen.getByTestId('total-level')).toHaveTextContent('85')
  })

  it('calculates and displays correct average progress from story data', () => {
    render(<Default />)
    // Calculate expected average progress dynamically
    const { initialProjects = [], initialAreas = [], initialResources = [] } = Default.args
    const all = [...initialProjects, ...initialAreas, ...initialResources]
    const expectedAvg = all.reduce((sum, item) => sum + item.progress, 0) / all.length
    expect(screen.getByTestId('avg-progress')).toHaveTextContent(String(expectedAvg))
  })

  it('displays correct active items count (projects + areas)', () => {
    render(<Default />)

    // From the story data: 4 projects + 4 areas = 8
    expect(screen.getByTestId('active-items-count')).toHaveTextContent('8')
  })

  it('displays correct item counts for each category', () => {
    render(<Default />)

    expect(screen.getByTestId('projects-count')).toHaveTextContent('4')
    expect(screen.getByTestId('areas-count')).toHaveTextContent('4')
    expect(screen.getByTestId('resources-count')).toHaveTextContent('4')
    expect(screen.getByTestId('archived-count')).toHaveTextContent('2')
  })

  it('handles tab changes correctly', async () => {
    render(<Default />)

    const tabChangeButton = screen.getByTestId('tab-change-button')
    fireEvent.click(tabChangeButton)

    await waitFor(() => {
      expect(screen.getByTestId('selected-tab')).toHaveTextContent('areas')
    })
  })

  it('handles adding new projects correctly', async () => {
    render(<Default />)

    const addProjectButton = screen.getByTestId('add-project')
    fireEvent.click(addProjectButton)

    await waitFor(() => {
      expect(screen.getByTestId('projects-count')).toHaveTextContent('5')
    })
  })

  it('updates total level when projects are added', async () => {
    render(<Default />)

    const addProjectButton = screen.getByTestId('add-project')
    fireEvent.click(addProjectButton)

    await waitFor(() => {
      // Original total: 85, new project adds level 1, so 85 + 1 = 86
      expect(screen.getByTestId('total-level')).toHaveTextContent('86')
    })
  })

  it('updates average progress when projects are added', async () => {
    render(<Default />)
    const addProjectButton = screen.getByTestId('add-project')
    fireEvent.click(addProjectButton)
    await waitFor(() => {
      const { initialProjects = [], initialAreas = [], initialResources = [] } = Default.args
      const all = [
        ...initialProjects,
        ...initialAreas,
        ...initialResources,
        { name: 'New Project', progress: 0, level: 1, xp: 0, maxXp: 1000, category: 'Test' },
      ]
      const expectedAvg = all.reduce((sum, item) => sum + item.progress, 0) / all.length
      const avgProgress = screen.getByTestId('avg-progress')
      expect(avgProgress.textContent).toBe(String(expectedAvg))
    })
  })

  it('updates active items count when projects are added', async () => {
    render(<Default />)

    const addProjectButton = screen.getByTestId('add-project')
    fireEvent.click(addProjectButton)

    await waitFor(() => {
      // Original: 8, new project adds 1, so 8 + 1 = 9
      expect(screen.getByTestId('active-items-count')).toHaveTextContent('9')
    })
  })

  it('renders with empty arrays when no initial data provided', () => {
    render(
      <ParaProfile
        initialProjects={[]}
        initialAreas={[]}
        initialResources={[]}
        initialArchived={[]}
      />
    )
    expect(screen.getByTestId('total-level')).toHaveTextContent('0')
    expect(screen.getByTestId('avg-progress')).toHaveTextContent('NaN') // Division by zero
    expect(screen.getByTestId('active-items-count')).toHaveTextContent('0')
    expect(screen.getByTestId('projects-count')).toHaveTextContent('0')
    expect(screen.getByTestId('areas-count')).toHaveTextContent('0')
    expect(screen.getByTestId('resources-count')).toHaveTextContent('0')
    expect(screen.getByTestId('archived-count')).toHaveTextContent('0')
  })

  it('maintains state correctly across multiple interactions', async () => {
    render(<Default />)

    // Add a project
    const addProjectButton = screen.getByTestId('add-project')
    fireEvent.click(addProjectButton)

    // Change tab
    const tabChangeButton = screen.getByTestId('tab-change-button')
    fireEvent.click(tabChangeButton)

    await waitFor(() => {
      expect(screen.getByTestId('projects-count')).toHaveTextContent('5')
      expect(screen.getByTestId('selected-tab')).toHaveTextContent('areas')
      expect(screen.getByTestId('total-level')).toHaveTextContent('86')
    })
  })
})
