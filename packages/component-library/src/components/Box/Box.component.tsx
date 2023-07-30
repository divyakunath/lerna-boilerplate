import styled from 'styled-components'

import { BoxProps } from 'component-library/src/components/Box/Box.types'
import margin from 'component-library/src/components/design-system/margin'
import padding from 'component-library/src/components/design-system/padding'

const Box = styled.div<BoxProps>`
  ${margin}
  ${padding}
`

export default Box
