import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#9377f8',
        site: {
          bg: '#0a0a0b',
          'bg-alt': '#0c0c0e',
          'card-start': '#141416',
          'card-end': '#0d0d0f',
          bright: '#fafafa',
          text: '#ededed',
          muted: '#9a9a9a',
          dim: '#8b8b8b',
          dimmer: '#6f6f6f',
        },
      },
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        site: '1120px',
      },
    },
  },
  plugins: [],
};
