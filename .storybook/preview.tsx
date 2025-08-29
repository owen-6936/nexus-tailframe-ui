import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: {
                icon: 'circlehollow',
                items: ['dark', 'light', 'gradient'],
                showName: true,
            },
        },
    },

    decorators: [
        (Story, context) => {
            const theme = context.globals.theme;
            return (
                <div className={`theme-${theme}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export default preview;
