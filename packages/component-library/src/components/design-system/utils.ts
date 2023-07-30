import { Range, Spacing } from 'component-library/src/components/design-system/types'

const scale = ['0', '0.5rem', '1rem', '1.5rem', '3rem', '5rem', '8rem', '10rem', '13rem']

export const getScale = (n: Range): string => (scale[n] ? `${scale[n]}` : `${n}px`)

export const getValue = (n: Spacing): string | undefined => (typeof n === 'number' ? getScale(n) : n)
