import {
  FlexContentProps,
  FlexWrapProps,
  FlexDirectionProps,
} from 'component-library/src/components/FlexBox/FlexBox.types'

const flexStyles = {
  alignItems: ({ alignItems }: { alignItems?: FlexContentProps }): { alignItems: FlexContentProps } | undefined =>
    alignItems && { alignItems },
  alignContent: ({
    alignContent,
  }: {
    alignContent?: FlexContentProps
  }): { alignContent: FlexContentProps } | undefined => alignContent && { alignContent },
  justifyItems: ({
    justifyItems,
  }: {
    justifyItems?: FlexContentProps
  }): { justifyItems: FlexContentProps } | undefined => justifyItems && { justifyItems },
  justifyContent: ({
    justifyContent,
  }: {
    justifyContent?: FlexContentProps
  }): { justifyContent: FlexContentProps } | undefined => justifyContent && { justifyContent },
  flexWrap: ({ flexWrap }: { flexWrap?: FlexWrapProps }): { flexWrap: FlexWrapProps } | undefined =>
    flexWrap && { flexWrap },
  flexDirection: ({
    flexDirection,
  }: {
    flexDirection?: FlexDirectionProps
  }): { flexDirection: FlexDirectionProps } | undefined => flexDirection && { flexDirection },
  flex: ({ flex }: { flex?: string | undefined }): { flex: string } | undefined | '' => flex && { flex },
  flexGrow: ({ flexGrow }: { flexGrow?: number | undefined }): { flexGrow: number } | undefined | 0 =>
    flexGrow && { flexGrow },
  flexShrink: ({ flexShrink }: { flexShrink?: number | undefined }): { flexShrink: number } | undefined | 0 =>
    flexShrink && { flexShrink },
  flexBasis: ({ flexBasis }: { flexBasis?: string }): { flexBasis: string } | undefined => flexBasis && { flexBasis },
  justifySelf: ({ justifySelf }: { justifySelf?: FlexContentProps }): { justifySelf: FlexContentProps } | undefined =>
    justifySelf && { justifySelf },
  alignSelf: ({ alignSelf }: { alignSelf?: FlexContentProps }): { alignSelf: FlexContentProps } | undefined =>
    alignSelf && { alignSelf },
  order: ({ order }: { order?: number | undefined }): { order: number } | undefined | 0 => order && { order },
}

export default flexStyles
