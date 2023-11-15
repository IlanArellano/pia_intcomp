/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        "max-height": "max-heigth",
        "min-height": "min-heigth",
        cards: "transform, border",
      },
    },
    colors: {
      "main-text-color": "#03506F",
      "carrousel-button": "#6C9D71",
      nav: "#0A043C",
      "nav-text-color": "#A3DDCB",
      logo: "#f4f4f4",
      footer: "#121212",
      "contact-container": "#B9E0AB",
      "card-background": "#E5E5E5",
      "card-button-background": "#f37449",
      "information-bottom": "#F3E598",
    },
    aspectRatio: {
      "800/800": "auto 800 / 800",
    },
  },
  plugins: [],
};
