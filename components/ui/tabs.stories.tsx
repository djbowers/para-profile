import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Account settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Password settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="home">
          <span className="flex items-center gap-2">
            <span>🏠</span>
            Home
          </span>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <span className="flex items-center gap-2">
            <span>👤</span>
            Profile
          </span>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <span className="flex items-center gap-2">
            <span>⚙️</span>
            Settings
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <p>Home content</p>
      </TabsContent>
      <TabsContent value="profile">
        <p>Profile content</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Settings content</p>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Active Tab</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Disabled Tab</TabsTrigger>
        <TabsTrigger value="tab3">Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Active tab content</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>This content won&apos;t be shown because the tab is disabled</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Another tab content</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical" className="w-[400px]">
      <div className="flex gap-4">
        <TabsList className="flex-col h-auto">
          <TabsTrigger value="tab1" className="w-full">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" className="w-full">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3" className="w-full">Tab 3</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="tab1" className="mt-0">
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-0">
            <p>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-0">
            <p>Content for Tab 3</p>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p>Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p>Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p>Content for Tab 6</p>
      </TabsContent>
    </Tabs>
  ),
};