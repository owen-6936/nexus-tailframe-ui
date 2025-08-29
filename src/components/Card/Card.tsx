import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { customVariants } from '../../constants/variants';
import { classNames, getPaddingClasses } from '../../utils/helper';
import { CardHeaderProps, CardProps, CardSectionProps } from '../../types/card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { ROUNDED, BORDER, BORDER_STYLE } from '../../constants/constants';
import { twMerge } from 'tailwind-merge';

// The main reusable Card component.
const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardSectionProps>;
    Footer: React.FC<CardSectionProps>;
} = ({
    children,
    index,
    bg = 'bg-white/10',
    paddingRatio = { x: 6, y: 4 },
    amount = 0.2,
    className = '',
    variants,
    rounded = '2xl',
    border = 'none',
    borderStyle = 'solid',
}) => {
    // Create a ref to attach to the motion component
    const ref = useRef(null);
    // Use the useInView hook to determine if the element is in the viewport
    const isInView = useInView(ref, { once: true, amount: amount });

    return (
        <motion.div
            ref={ref} // Attach the ref to the component
            className={twMerge(
                classNames(
                    `${bg} ${ROUNDED[rounded]} ${BORDER[border]} ${BORDER_STYLE[borderStyle]} ${getPaddingClasses(paddingRatio)}`,
                    className,
                ),
            )}
            variants={
                variants
                    ? typeof variants === 'string'
                        ? customVariants[variants]
                        : variants
                    : customVariants.fadeIn
            }
            initial="hidden" // Start from the hidden state
            // Animate to the 'visible' state if isInView is true
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
                delay: index ? index * 0.1 : 0, // Stagger delay by 100ms per item
                duration: 0.5,
            }}
        >
            {children}
        </motion.div>
    );
};

// Assign the sub-components to the main Card component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
