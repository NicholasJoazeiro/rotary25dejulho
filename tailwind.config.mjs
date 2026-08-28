/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rotary: {
          blue:   '#00549F',
          gold:   '#F7A81B',
          azure:  '#009FD9',
          dark:   '#003366',
          light:  '#E8F4FC',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        marker:  ['"Permanent Marker"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
