declare module 'component-library/components/Anchor/Anchor.component' {
  /// <reference types="react" />
  import AnchorProps from 'component-library/src/components/Anchor/Anchor.types';
  const AnchorComponent: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, AnchorProps>>;
  export default AnchorComponent;

}
declare module 'component-library/components/Anchor/Anchor.styles' {
  import AnchorProps from 'component-library/src/components/Anchor/Anchor.types';
  const AnchorStyle: import("styled-components").RuleSet<AnchorProps>;
  export default AnchorStyle;

}
declare module 'component-library/components/Anchor/Anchor.types' {
  import { HTMLAttributes } from 'react';
  import { SpacingProps } from 'component-library/src/components/design-system/types';
  interface AnchorProps extends HTMLAttributes<HTMLAnchorElement>, SpacingProps {
      readonly button?: boolean;
      readonly primary?: boolean;
      readonly secondary?: boolean;
      readonly link?: boolean;
  }
  export default AnchorProps;

}
declare module 'component-library/components/Box/Box.component' {
  /// <reference types="react" />
  import { BoxProps } from 'component-library/src/components/Box/Box.types';
  const Box: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps>>;
  export default Box;

}
declare module 'component-library/components/Box/Box.types' {
  import { HTMLAttributes } from 'react';
  import { SpacingProps } from 'component-library/src/components/design-system/types';
  export interface BoxProps extends SpacingProps, HTMLAttributes<HTMLDivElement> {
  }

}
declare module 'component-library/components/Button/Button.component' {
  /// <reference types="react" />
  import ButtonProps from 'component-library/src/components/Button/Button.types';
  const ButtonComponent: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>>;
  export default ButtonComponent;

}
declare module 'component-library/components/Button/Button.styles' {
  import ButtonProps from 'component-library/src/components/Button/Button.types';
  const ButtonStyle: import("styled-components").RuleSet<ButtonProps>;
  export default ButtonStyle;

}
declare module 'component-library/components/Button/Button.types' {
  import { HTMLAttributes } from 'react';
  import { SpacingProps } from 'component-library/src/components/design-system/types';
  interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, SpacingProps {
      readonly primary?: boolean;
      readonly secondary?: boolean;
      readonly tertiary?: boolean;
      readonly link?: boolean;
  }
  export default ButtonProps;

}
declare module 'component-library/components/FlexBox/FlexBox.component' {
  /// <reference types="react" />
  import { FlexBoxProps } from 'component-library/src/components/FlexBox/FlexBox.types';
  const FlexBox: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<{
      ref?: import("react").LegacyRef<HTMLDivElement>;
      key?: import("react").Key;
  } & import("component-library/components/Box/Box.types").BoxProps, "ref"> & {
      ref?: import("react").Ref<HTMLDivElement>;
  }, FlexBoxProps>>;
  export default FlexBox;

}
declare module 'component-library/components/FlexBox/FlexBox.styles' {
  import { FlexContentProps, FlexWrapProps, FlexDirectionProps } from 'component-library/src/components/FlexBox/FlexBox.types';
  const flexStyles: {
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

}
declare module 'component-library/components/FlexBox/FlexBox.types' {
  import { BoxProps } from 'component-library/src/components/Box/Box.types';
  export type FlexContentProps = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | undefined;
  export type FlexWrapProps = 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  export type FlexDirectionProps = 'column' | 'row' | undefined;
  export interface FlexBoxProps extends BoxProps {
      alignItems?: FlexContentProps;
      alignContent?: FlexContentProps;
      justifyItems?: FlexContentProps;
      justifyContent?: FlexContentProps;
      flexWrap?: FlexWrapProps;
      flexDirection?: FlexDirectionProps;
      flex?: string | undefined;
      flexGrow?: number | undefined;
      flexShrink?: number | undefined;
      flexBasis?: string | undefined;
      justifySelf?: FlexContentProps;
      alignSelf?: FlexContentProps;
      order?: number | undefined;
  }

}
declare module 'component-library/components/Input/Input.component' {
  /// <reference types="react" />
  import { InputProps } from 'component-library/src/components/Input/Input.types';
  export const StyledInput: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, InputProps>>;
  export const StyledLabel: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, InputProps>>;
  export const StyledMessage: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, InputProps>>;
  export const StyledText: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, InputProps>>;

}
declare module 'component-library/components/Input/Input' {
  import { FC } from 'react';
  import { InputProps } from 'component-library/src/components/Input/Input.types';
  export const Input: FC<InputProps>;

}
declare module 'component-library/components/Input/Input.types' {
  import { ChangeEventHandler } from 'react';
  export interface InputProps {
      id?: string;
      label?: string;
      error?: boolean;
      message?: string;
      success?: boolean;
      disabled?: boolean;
      placeholder?: string;
      onChange?: ChangeEventHandler<HTMLInputElement>;
  }

}
declare module 'component-library/components/Input/index' {
  export * from 'component-library/src/components/Input/Input';
  export * from 'component-library/src/components/Input/Input.types';

}
declare module 'component-library/components/Text/Text.component' {
  /// <reference types="react" />
  import { TextProps } from 'component-library/src/components/Text/Text.types';
  function Text({ variant, as, error, children, ...props }: TextProps): JSX.Element;
  export default Text;

}
declare module 'component-library/components/Text/Text.types' {
  import { HTMLAttributes, ReactNode } from 'react';
  import { SpacingProps } from 'component-library/src/components/design-system/types';
  export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label';
  export interface TextProps extends HTMLAttributes<HTMLElement>, SpacingProps {
      variant: TextType;
      as?: TextType;
      children: ReactNode;
      error?: boolean;
  }

}
declare module 'component-library/components/design-system/margin' {
  import { MarginProps } from 'component-library/src/components/design-system/types';
  const _default: import("styled-components").RuleSet<MarginProps>;
  export default _default;

}
declare module 'component-library/components/design-system/padding' {
  import { PaddingProps } from 'component-library/src/components/design-system/types';
  const _default: import("styled-components").RuleSet<PaddingProps>;
  export default _default;

}
declare module 'component-library/components/design-system/types' {
  export type Range = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | number;
  export type Spacing = Range | string | undefined;
  export type MarginProps = {
      m?: Spacing;
      mx?: Spacing;
      my?: Spacing;
      mt?: Spacing;
      mb?: Spacing;
      mr?: Spacing;
      ml?: Spacing;
  };
  export type PaddingProps = {
      p?: Spacing;
      px?: Spacing;
      py?: Spacing;
      pt?: Spacing;
      pb?: Spacing;
      pr?: Spacing;
      pl?: Spacing;
  };
  export type SpacingProps = MarginProps & PaddingProps;

}
declare module 'component-library/components/design-system/utils' {
  import { Range, Spacing } from 'component-library/src/components/design-system/types';
  export const getScale: (n: Range) => string;
  export const getValue: (n: Spacing) => string | undefined;

}
declare module 'component-library/components/index' {
  export { default as Anchor } from 'component-library/src/components/Anchor/Anchor.component';
  export { default as Button } from 'component-library/src/components/Button/Button.component';
  export { default as FlexBox } from 'component-library/src/components/FlexBox/FlexBox.component';
  export { default as Box } from 'component-library/src/components/Box/Box.component';
  export { default as Text } from 'component-library/src/components/Text/Text.component';

}
declare module 'component-library/index' {
  export * from 'component-library/src/components';
  export { default as theme } from 'component-library/src/theme/theme';

}
declare module 'component-library/theme/theme' {
  const theme: {
      colors: {
          primary: string;
          secondary: string;
          warning: string;
          success: string;
          error: string;
          info: string;
          white: string;
          black: string;
      };
      button: {
          height: string;
          padding: string;
          borderRadius: string;
          fontWeight: string;
          textDecoration: string;
          display: string;
          alignItems: string;
          width: string;
          primary: {
              color: string;
              backgroundColor: string;
              border: string;
          };
          secondary: {
              color: string;
              backgroundColor: string;
              border: string;
          };
          tertiary: {
              color: string;
              backgroundColor: string;
              border: string;
          };
          link: {
              color: string;
              backgroundColor: string;
              border: string;
          };
      };
      anchor: {
          color: string;
          fontWeight: number;
          '&:visited': {
              color: string;
          };
      };
      h1: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      h2: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      h3: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      h4: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      h5: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      h6: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      p: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
      label: {
          fontSize: string;
          lineHeight: string;
          color: string;
      };
  };
  export default theme;

}
declare module 'component-library' {
  import main = require('component-library/src');
  export = main;
}