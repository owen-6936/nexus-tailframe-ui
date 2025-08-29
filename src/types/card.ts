import { Variants } from 'framer-motion';
import { AnimationVariants } from '../constants/variants';
import { ReactNode } from 'react';

type CardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

type PaddingScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface PaddingRatio {
    x: PaddingScale;
    y: PaddingScale;
}
export interface CardTheme {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    font: string;
}

export interface CardProps {
    children: React.ReactNode;
    index?: number;
    className?: string;
    bg?: string;
    paddingRatio?: PaddingRatio;
    // Allows the user to provide custom animation variants
    variants?: AnimationVariants | Variants;
    amount?: number;
    rounded?: CardRounded;
    theme?: CardTheme;
    borderStyle?: string;
    border?: string;
}

export interface CardHeaderProps {
    title: string;
    icon?: ReactNode;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    gradient?: boolean;
    className?: string;
}

export interface CardSectionProps {
    children: React.ReactNode;
    className?: string;
}
