import { FlexContentProps, FlexWrapProps, FlexDirectionProps } from 'component-library/src/components/FlexBox/FlexBox.types';
declare const flexStyles: {
    alignItems: ({ alignItems }: {
        alignItems?: FlexContentProps;
    }) => {
        alignItems: FlexContentProps;
    };
    alignContent: ({ alignContent, }: {
        alignContent?: FlexContentProps;
    }) => {
        alignContent: FlexContentProps;
    };
    justifyItems: ({ justifyItems, }: {
        justifyItems?: FlexContentProps;
    }) => {
        justifyItems: FlexContentProps;
    };
    justifyContent: ({ justifyContent, }: {
        justifyContent?: FlexContentProps;
    }) => {
        justifyContent: FlexContentProps;
    };
    flexWrap: ({ flexWrap }: {
        flexWrap?: FlexWrapProps;
    }) => {
        flexWrap: FlexWrapProps;
    };
    flexDirection: ({ flexDirection, }: {
        flexDirection?: FlexDirectionProps;
    }) => {
        flexDirection: FlexDirectionProps;
    };
    flex: ({ flex }: {
        flex?: string | undefined;
    }) => "" | {
        flex: string;
    };
    flexGrow: ({ flexGrow }: {
        flexGrow?: number | undefined;
    }) => 0 | {
        flexGrow: number;
    };
    flexShrink: ({ flexShrink }: {
        flexShrink?: number | undefined;
    }) => 0 | {
        flexShrink: number;
    };
    flexBasis: ({ flexBasis }: {
        flexBasis?: string;
    }) => {
        flexBasis: string;
    };
    justifySelf: ({ justifySelf }: {
        justifySelf?: FlexContentProps;
    }) => {
        justifySelf: FlexContentProps;
    };
    alignSelf: ({ alignSelf }: {
        alignSelf?: FlexContentProps;
    }) => {
        alignSelf: FlexContentProps;
    };
    order: ({ order }: {
        order?: number | undefined;
    }) => 0 | {
        order: number;
    };
};
export default flexStyles;
