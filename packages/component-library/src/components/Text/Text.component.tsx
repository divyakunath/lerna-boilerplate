import React from 'react'

import styled, { css } from 'styled-components'

import margin from 'component-library/src/components/design-system/margin'
import padding from 'component-library/src/components/design-system/padding'
import { TextProps } from 'component-library/src/components/Text/Text.types'

function Text({ variant, as = undefined, error = false, children, ...props }: TextProps): JSX.Element {
  const componentStyle = css(({ theme }) => ({
    ...theme[variant],
  }))

  const Component = styled(as || variant)<Omit<TextProps, 'variant' | 'as' | 'error'>>`
    ${componentStyle}
    ${margin}
    ${padding}
    
    ${error &&
    css`
      color: var(--red);
    `}
  `

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props}>{children}</Component>
}

export default Text
