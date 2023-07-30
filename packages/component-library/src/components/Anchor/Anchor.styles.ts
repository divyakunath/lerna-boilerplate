import { css } from 'styled-components'

import AnchorProps from 'component-library/src/components/Anchor/Anchor.types'

const AnchorStyle = css<AnchorProps>(({ theme: { anchor } }) => ({
  ...anchor,
}))

export default AnchorStyle
