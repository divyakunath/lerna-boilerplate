import { BoxProps } from 'component-library/src/components/Box/Box.types'

export type FlexContentProps = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | undefined
export type FlexWrapProps = 'wrap' | 'nowrap' | 'wrap-reverse' | undefined
export type FlexDirectionProps = 'column' | 'row' | undefined

export interface FlexBoxProps extends BoxProps {
  alignItems?: FlexContentProps
  alignContent?: FlexContentProps
  justifyItems?: FlexContentProps
  justifyContent?: FlexContentProps
  flexWrap?: FlexWrapProps
  flexDirection?: FlexDirectionProps
  flex?: string | undefined
  flexGrow?: number | undefined
  flexShrink?: number | undefined
  flexBasis?: string | undefined
  justifySelf?: FlexContentProps
  alignSelf?: FlexContentProps
  order?: number | undefined
}
