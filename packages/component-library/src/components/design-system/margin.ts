import { css } from 'styled-components'

import { Spacing, MarginProps } from 'component-library/src/components/design-system/types'
import { getValue } from 'component-library/src/components/design-system/utils'

const margin = ({ m }: { m?: Spacing }) => getValue(m) && { margin: getValue(m) }
const marginTop = ({ mt }: { mt?: Spacing }) => getValue(mt) && { marginTop: getValue(mt) }
const marginBottom = ({ mb }: { mb?: Spacing }) => getValue(mb) && { marginBottom: getValue(mb) }
const marginRight = ({ mr }: { mr?: Spacing }) => getValue(mr) && { marginRight: getValue(mr) }
const marginLeft = ({ ml }: { ml?: Spacing }) => getValue(ml) && { marginLeft: getValue(ml) }
const marginX = ({ mx }: { mx?: Spacing }) =>
  getValue(mx) && {
    marginLeft: getValue(mx),
    marginRight: getValue(mx),
  }
const marginY = ({ my }: { my?: Spacing }) =>
  getValue(my) && {
    marginTop: getValue(my),
    marginBottom: getValue(my),
  }

export default css<MarginProps>`
  ${margin}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
  ${marginX}
  ${marginY}
`
