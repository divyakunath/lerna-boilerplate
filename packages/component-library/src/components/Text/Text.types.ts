import { HTMLAttributes, ReactNode } from 'react'

import { SpacingProps } from 'component-library/src/components/design-system/types'

export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label'

export interface TextProps extends HTMLAttributes<HTMLElement>, SpacingProps {
  variant: TextType
  as?: TextType
  children: ReactNode
  error?: boolean
}
