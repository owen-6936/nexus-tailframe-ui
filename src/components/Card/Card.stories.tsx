import React from 'react';
import Card from './Card';
import { CardHeaderProps, CardProps } from '../../types/card';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

const Template = (args: CardProps & CardHeaderProps) => (
    <Card {...args}>
        <Card.Header title="Card Title" />
        <Card.Body>
            This is an example of a card body. You can put any content here,
            such as text, images, or other components.
        </Card.Body>
    </Card>
);

export const Default = Template.bind({});
Default.args = {
    index: 0,
    bg: 'bg-white/10',
    amount: 0.2,
    paddingRatio: { x: 6, y: 4 },
    className: '',
    rounded: '2xl',
    border: 'md',
    borderStyle: 'solid',
};

export default meta;
