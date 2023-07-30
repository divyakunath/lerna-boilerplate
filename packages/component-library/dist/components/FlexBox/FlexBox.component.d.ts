/// <reference types="react" />
import { FlexBoxProps } from 'component-library/src/components/FlexBox/FlexBox.types';
declare const FlexBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<{
    ref?: import("react").LegacyRef<HTMLDivElement>;
    key?: import("react").Key;
} & import("../Box/Box.types").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, FlexBoxProps>>;
export default FlexBox;
