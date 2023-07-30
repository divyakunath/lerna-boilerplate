import { css } from 'styled-components'

import ButtonProps from 'component-library/src/components/Button/Button.types'

const ButtonStyle = css<ButtonProps>(({ theme: { button }, ...props }) => ({
  ...button,
  ...(props.primary && button.primary),
  ...(props.secondary && button.secondary),
  ...(props.tertiary && button.tertiary),
  ...(props.link && {
    ...button.link,
    height: 'fit-content',
    width: 'fit-content',
  }),
}))

export default ButtonStyle
