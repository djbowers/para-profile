import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from './button';
import { Badge } from './badge';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
        <CardDescription>Current project progress</CardDescription>
        <CardAction>
          <Badge variant="secondary">Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This project is currently in active development.</p>
      </CardContent>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Simple Header</CardTitle>
        <CardDescription>Just a header with description</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader className="border-b">
        <CardTitle>Bordered Header</CardTitle>
        <CardDescription>Header with bottom border</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content area with bordered header above.</p>
      </CardContent>
      <CardFooter className="border-t">
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Notification</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">You have 3 new messages.</p>
      </CardContent>
    </Card>
  ),
};