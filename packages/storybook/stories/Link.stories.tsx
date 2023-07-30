import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Anchor as LinkComponent } from 'component-library'

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
}

export default meta

type Story = StoryObj<typeof LinkComponent>

export const Link: Story = {
  render: () => <LinkComponent href="#">Link</LinkComponent>,
}

export const LinkButton: Story = {
  render: () => (
    <LinkComponent button href="#" primary>
      Link with Button style
    </LinkComponent>
  ),
}
