import styled from 'styled-components'

import ButtonStyle from 'component-library/src/components/Button/Button.styles'
import ButtonProps from 'component-library/src/components/Button/Button.types'
import margin from 'component-library/src/components/design-system/margin'
import padding from 'component-library/src/components/design-system/padding'

const ButtonComponent = styled.button<ButtonProps>`
  ${ButtonStyle}
  ${margin}
  ${padding}
`

export default ButtonComponent
