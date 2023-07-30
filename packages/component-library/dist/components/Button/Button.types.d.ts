import { HTMLAttributes } from 'react';
import { SpacingProps } from 'component-library/src/components/design-system/types';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, SpacingProps {
    readonly primary?: boolean;
    readonly secondary?: boolean;
    readonly tertiary?: boolean;
    readonly link?: boolean;
}
export default ButtonProps;
