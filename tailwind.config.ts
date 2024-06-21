import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'color-primary': '#912728',
            'color-primary-50': '#9127297a',
            'color-primary-dark': '#441E15',
            'color-secondary': '#FAA370',
            'color-secondary-light': '#FEEDE2',
            'color-danger': '#C84108',
            'color-light': '#FAF2F1',
            'color-white': '#FFFFFF',
            'color-dark': '#333333',
        },
    },
    plugins: [],
};
export default config;
