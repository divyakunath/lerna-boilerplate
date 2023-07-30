import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Text as TextComponent } from 'component-library'

const meta: Meta<typeof TextComponent> = {
  component: TextComponent,
}

export default meta

type Story = StoryObj<typeof TextComponent>

export const TextH1: Story = {
  render: () => <TextComponent variant="h1">Heading 1</TextComponent>,
}
export const TextH2: Story = {
  render: () => <TextComponent variant="h2">Heading 2</TextComponent>,
}
export const TextH3: Story = {
  render: () => <TextComponent variant="h3">Heading 3</TextComponent>,
}
export const TextH4: Story = {
  render: () => <TextComponent variant="h4">Heading 4</TextComponent>,
}
export const TextH5: Story = {
  render: () => <TextComponent variant="h5">Heading 5</TextComponent>,
}
export const TextH6: Story = {
  render: () => <TextComponent variant="h6">Heading 6</TextComponent>,
}
export const TextParagraph: Story = {
  render: () => <TextComponent variant="p">Paragraph</TextComponent>,
}
export const TextLabel: Story = {
  render: () => <TextComponent variant="label">Label</TextComponent>,
}
export const TextH2asParagraph: Story = {
  render: () => (
    <TextComponent variant="h2" as="p">
      Heading 2
    </TextComponent>
  ),
}
export const TextH3asParagraph: Story = {
  render: () => (
    <TextComponent variant="h3" as="p">
      Heading 3
    </TextComponent>
  ),
}
export const TextH4asParagraph: Story = {
  render: () => (
    <TextComponent variant="h4" as="p">
      Heading 4
    </TextComponent>
  ),
}
export const TextH5asParagraph: Story = {
  render: () => (
    <TextComponent variant="h5" as="p">
      Heading 5
    </TextComponent>
  ),
}
export const TextH6asParagraph: Story = {
  render: () => (
    <TextComponent variant="h6" as="p">
      Heading 6
    </TextComponent>
  ),
}
export const TextParagraphasH1: Story = {
  render: () => (
    <TextComponent variant="p" as="h1">
      Paragraph
    </TextComponent>
  ),
}
export const TextH2asLabel: Story = {
  render: () => (
    <TextComponent variant="h1" as="label">
      Heading 1
    </TextComponent>
  ),
}
