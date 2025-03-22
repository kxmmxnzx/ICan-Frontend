import type { Config } from 'tailwindcss';
import fontSize from './src/presets/fontSize';
import colors from './src/presets/colors';
import { screen } from './src/presets/screen';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presets/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize,
      colors: {
        ...colors,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        ...screen,
      },
    },
  },
  plugins: [],
  safelist: [
    'ql-align-center',
    'ql-align-right',
    'ql-align-left',

    'bg-goal01-100',
    'bg-goal01',
    'text-goal01',
    'bg-goal02-100',
    'bg-goal02',
    'text-goal02',
    'bg-goal03-100',
    'bg-goal03',
    'text-goal03',
    'bg-goal04-100',
    'bg-goal04',
    'text-goal04',
    'bg-goal05-100',
    'bg-goal05',
    'text-goal05',
    {
      pattern: /data-list-.*/, // data-list 속성 보존
    },
  ],
};
export default config;
