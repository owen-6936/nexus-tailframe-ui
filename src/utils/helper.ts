import { PaddingRatio } from '../types/card';

export const getPaddingClasses = (ratio: PaddingRatio): string => {
    const xClass = `px-${ratio.x}`;
    const yClass = `py-${ratio.y}`;
    return `${xClass} ${yClass}`;
};

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
