import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'component-library'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => (
    <Button primary onClick={() => console.log('clicked')}>
      Primary Button
    </Button>
  ),
}
export const Secondary: Story = {
  render: () => (
    <Button secondary onClick={() => console.log('clicked')}>
      Secondary Button
    </Button>
  ),
}
export const Tertiary: Story = {
  render: () => (
    <Button tertiary onClick={() => console.log('clicked')}>
      Tertiary Button
    </Button>
  ),
}
export const Link: Story = {
  render: () => (
    <Button link onClick={() => console.log('clicked')}>
      Link Button
    </Button>
  ),
}
