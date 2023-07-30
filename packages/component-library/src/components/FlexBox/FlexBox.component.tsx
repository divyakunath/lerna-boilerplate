import styled from 'styled-components'

import Box from 'component-library/src/components/Box/Box.component'
import flexStyles from 'component-library/src/components/FlexBox/FlexBox.styles'
import { FlexBoxProps } from 'component-library/src/components/FlexBox/FlexBox.types'

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;

  ${flexStyles.alignItems}
  ${flexStyles.alignContent}
  ${flexStyles.justifyContent}
  ${flexStyles.justifyItems}
  ${flexStyles.flexWrap}
  ${flexStyles.flexDirection}
  ${flexStyles.flex}
  ${flexStyles.flexGrow}
  ${flexStyles.flexShrink}
  ${flexStyles.flexBasis}
  ${flexStyles.justifySelf}
  ${flexStyles.alignSelf}
  ${flexStyles.order}
`

export default FlexBox
