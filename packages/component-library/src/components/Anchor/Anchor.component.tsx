import styled, { css } from 'styled-components'

import AnchorStyle from 'component-library/src/components/Anchor/Anchor.styles'
import AnchorProps from 'component-library/src/components/Anchor/Anchor.types'
import ButtonStyle from 'component-library/src/components/Button/Button.styles'
import margin from 'component-library/src/components/design-system/margin'
import padding from 'component-library/src/components/design-system/padding'

const AnchorComponent = styled.a<AnchorProps>`
  ${AnchorStyle}
  ${margin}
  ${padding}
  ${({ button = false }) =>
    button &&
    css`
      ${ButtonStyle}
    `}
`

export default AnchorComponent
