const config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'px-7',
        'px-8',
        'px-9',
        'px-10',
        'px-11',
        'px-12',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'py-7',
        'py-8',
        'py-9',
        'py-10',
        'py-11',
        'py-12',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
