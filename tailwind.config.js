/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        'off-black': '#14142B',
        'off-white': '#FCFCFC',
        orange: colors.orange,
        blueGray: colors.slate,
        coolGray: colors.gray,
        teal: colors.teal,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        sky: colors.sky,
        grey: {
          0: '#FFFFFF',
          100: '#FCFCFC',
          200: '#F7F7FC',
          300: '#EFF0F7',
          400: '#D9DBE9',
          500: '#A0A3BD',
          600: '#6E7191',
          700: '#4E4B66',
          800: '#262338',
          900: '#14142B'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        headings: ['Manrope', ...defaultTheme.fontFamily.sans],
        fancy: ['Sriracha']
      },
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.900'),
            a: {
              color: theme('colors.grey.900'),
              '&:hover': {
                color: theme('colors.grey.700')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.grey.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              }
            },
            hr: { borderColor: theme('colors.grey.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.grey.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.grey.500') }
              }
            }
          }
        }
      })
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
}
