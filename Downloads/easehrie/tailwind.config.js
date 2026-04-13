/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-background": "#191c1e",
        "outline-variant": "#bbcabf",
        "on-secondary-fixed": "#2a1700",
        "tertiary": "#006c49",
        "surface-container": "#eceef0",
        "primary": "#006c49",
        "on-secondary-fixed-variant": "#653e00",
        "surface-dim": "#d8dadc",
        "surface-container-low": "#f2f4f6",
        "primary-fixed-dim": "#4edea3",
        "surface-container-highest": "#e0e3e5",
        "surface-container-high": "#e6e8ea",
        "on-surface": "#191c1e",
        "on-primary-fixed": "#002113",
        "on-primary-container": "#00422b",
        "on-tertiary-container": "#00422b",
        "tertiary-fixed": "#6ffbbe",
        "secondary-container": "#fea619",
        "tertiary-fixed-dim": "#4edea3",
        "inverse-on-surface": "#eff1f3",
        "error-container": "#ffdad6",
        "surface-variant": "#e0e3e5",
        "primary-container": "#10b981",
        "secondary-fixed": "#ffddb8",
        "tertiary-container": "#10b981",
        "on-surface-variant": "#3c4a42",
        "on-tertiary-fixed": "#002113",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#6ffbbe",
        "background": "#f7f9fb",
        "surface-bright": "#f7f9fb",
        "on-secondary-container": "#684000",
        "surface-tint": "#006c49",
        "outline": "#6c7a71",
        "on-tertiary": "#ffffff",
        "secondary": "#855300",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#005236",
        "surface": "#f7f9fb",
        "on-primary": "#ffffff",
        "secondary-fixed-dim": "#ffb95f",
        "on-tertiary-fixed-variant": "#005236",
        "inverse-primary": "#4edea3",
        "inverse-surface": "#2d3133",
        "on-error-container": "#93000a",
        "on-error": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      animation: {
        'orbit': 'orbit 20s linear infinite alternate',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(min(40vw, 450px)) rotate(0deg)' },
          'to': { transform: 'rotate(180deg) translateX(min(40vw, 450px)) rotate(-180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
