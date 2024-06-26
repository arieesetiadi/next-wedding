import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#912728',
                'primary-50': '#9127297a',
                'primary-dark': '#441E15',
                'secondary': '#FAA370',
                'secondary-light': '#FEEDE2',
                'danger': '#C84108',
                'light': '#FAF2F1',
                'dark': '#333333',
            },
        },
    },
    plugins: [],
};
export default config;
