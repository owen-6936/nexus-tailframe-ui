import { Variants } from 'framer-motion';

interface CustomVariants {
    slideInLeft: Variants;
    slideInRight: Variants;
    slideInUp: Variants;
    slideInDown: Variants;
    fadeIn: Variants;
    zoomIn: Variants;
}

export const customVariants: CustomVariants = {
    slideInLeft: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    },

    slideInRight: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    },

    slideInUp: {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    },

    slideInDown: {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    },

    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },

    zoomIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
};

export type AnimationVariants = keyof typeof customVariants;
