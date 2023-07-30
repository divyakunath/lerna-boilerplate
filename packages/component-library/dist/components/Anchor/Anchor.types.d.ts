import { HTMLAttributes } from 'react';
import { SpacingProps } from 'component-library/src/components/design-system/types';
interface AnchorProps extends HTMLAttributes<HTMLAnchorElement>, SpacingProps {
    readonly button?: boolean;
    readonly primary?: boolean;
    readonly secondary?: boolean;
    readonly link?: boolean;
}
export default AnchorProps;
