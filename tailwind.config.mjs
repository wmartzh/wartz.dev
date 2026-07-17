/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7aa2f7',
          '50': '#EEF4FD', '100': '#DEE9FA', '200': '#BCD1F5', '300': '#9AB9EF',
          '400': '#78A2EA', '500': '#7aa2f7', '600': '#416EB7', '700': '#31538A',
          '800': '#21385D', '900': '#111D30',
        },
        magenta: {
          DEFAULT: '#bb9af7',
          '50': '#F3EEFD', '100': '#E7DEF9', '200': '#CFBDF3', '300': '#B69CEC',
          '400': '#9E7BE6', '500': '#bb9af7', '600': '#6C48B2', '700': '#523785',
          '800': '#392658', '900': '#1F152B',
        },
        cyan: {
          DEFAULT: '#7dcfff',
          '50': '#E8F6FE', '100': '#D4ECFB', '200': '#AAD6F7', '300': '#83BEF3',
          '400': '#5CA9EF', '500': '#7dcfff', '600': '#297CCF', '700': '#1F5F9E',
          '800': '#15416C', '900': '#0C263F',
        },
        green: {
          DEFAULT: '#9ece6a',
          '50': '#F1FAF0', '100': '#E4F4E1', '200': '#CAE9BF', '300': '#AFDD9D',
          '400': '#95D27A', '500': '#9ece6a', '600': '#83BE55', '700': '#689F40',
          '800': '#4D802B', '900': '#326016',
        },
        red: {
          DEFAULT: '#f7768e',
          '50': '#FEF3F4', '100': '#FEE8EA', '200': '#FCCDD2', '300': '#FBB1BB',
          '400': '#F995A3', '500': '#f7768e', '600': '#DC657A', '700': '#C15566',
          '800': '#A64451', '900': '#8B333D',
        },
        yellow: {
          DEFAULT: '#e0af68',
          '50': '#FEF9F3', '100': '#FEF3E8', '200': '#FCE7D2', '300': '#FADBBC',
          '400': '#F8CFA6', '500': '#e0af68', '600': '#C89D5A', '700': '#AF8B4D',
          '800': '#96793F', '900': '#7E6731',
        },
        base: {
          '50': '#F9FAFB', '100': '#F1F3F5', '200': '#C9D1D9', '300': '#8B949E',
          '400': '#5A626A', '500': '#414750', '600': '#333941', '700': '#252930',
          '800': '#1A1B26', '900': '#13141A', '950': '#000000',
        },
        status: {
          success: '#9ece6a',
          warn: '#e0af68',
          info: '#7dcfff',
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
