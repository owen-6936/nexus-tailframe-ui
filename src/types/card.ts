import { Variants } from 'framer-motion';
import { AnimationVariants } from '../constants/variants';
import { ReactNode } from 'react';

type CardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

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
    padding?: string;
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
