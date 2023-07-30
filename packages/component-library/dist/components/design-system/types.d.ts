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
