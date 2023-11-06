/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        "max-height": "max-heigth",
        "min-height": "min-heigth",
      },
    },
    colors: {
      logo: "#f4f4f4",
      footer: "#121212",
      "contact-container": "#B9E0AB",
    },
  },
  plugins: [],
};
