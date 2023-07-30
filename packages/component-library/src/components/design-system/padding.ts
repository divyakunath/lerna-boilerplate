import { css } from 'styled-components'

import { Spacing, PaddingProps } from 'component-library/src/components/design-system/types'
import { getValue } from 'component-library/src/components/design-system/utils'

const padding = ({ p }: { p?: Spacing }) => getValue(p) && { padding: getValue(p) }
const paddingTop = ({ pt }: { pt?: Spacing }) => getValue(pt) && { paddingTop: getValue(pt) }
const paddingBottom = ({ pb }: { pb?: Spacing }) => getValue(pb) && { paddingBottom: getValue(pb) }
const paddingRight = ({ pr }: { pr?: Spacing }) => getValue(pr) && { paddingRight: getValue(pr) }
const paddingLeft = ({ pl }: { pl?: Spacing }) => getValue(pl) && { paddingLeft: getValue(pl) }
const paddingX = ({ px }: { px?: Spacing }) =>
  getValue(px) && {
    paddingLeft: getValue(px),
    paddingRight: getValue(px),
  }
const paddingY = ({ py }: { py?: Spacing }) =>
  getValue(py) && {
    paddingTop: getValue(py),
    paddingBottom: getValue(py),
  }

export default css<PaddingProps>`
  ${padding}
  ${paddingBottom}
  ${paddingLeft}
  ${paddingRight}
  ${paddingTop}
  ${paddingX}
  ${paddingY}
`
