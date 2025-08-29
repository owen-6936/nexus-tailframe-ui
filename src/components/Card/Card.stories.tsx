import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { FaHeart, FaStar, FaCode } from 'react-icons/fa'; // You might need to install react-icons

// Define the metadata for your component
const meta: Meta<typeof Card> = {
    title: 'Components/Card', // The path in the Storybook sidebar
    component: Card,
    tags: ['autodocs'], // Generates documentation for your component
    parameters: {
        // You can add layout parameters to center your component
        layout: 'centered',
    },
};

export default meta;

// Define a type for your stories
type Story = StoryObj<typeof Card>;

// --- Default Story ---
// This story showcases a complete Card with a header, body, and footer.
export const Default: Story = {
    args: {
        // These props are passed to the main Card component
        padding: 'p-10',
        border: 'sm',
        borderStyle: 'solid',
        className: 'w-full',

        // The children prop renders all the sub-components inside the Card
        children: (
            <>
                <Card.Header
                    title="Introducing Nexus"
                    subtitle="A UI Component Library"
                    icon={<FaCode />}
                    gradient
                />
                <Card.Body>
                    <p>
                        Nexus is a highly flexible and customizable UI component
                        library for React, built with the power of Tailwind CSS
                        and the magic of Framer Motion.
                    </p>
                </Card.Body>
                <Card.Footer>
                    <div className="flex justify-between items-center text-xs">
                        <span>© 2025 Owen Erhabor</span>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1 text-red-500">
                                <FaHeart /> 5.0k
                            </span>
                            <span className="flex items-center gap-1 text-yellow-400">
                                <FaStar /> 4.9
                            </span>
                        </div>
                    </div>
                </Card.Footer>
            </>
        ),
    },
};

// --- Staggered List Story ---
// This story demonstrates the on-scroll animation with the `index` prop
export const StaggeredList: Story = {
    args: {
        // The main Card component's props
        padding: 'p-6',
        bg: 'bg-zinc-800',
    },
    render: (args) => (
        <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <Card {...args} key={index} index={index} className="w-[300px]">
                    <Card.Body>
                        <p>Animated Card #{index + 1}</p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    ),
};
