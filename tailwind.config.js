/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
    },
  },
  plugins: [],
};
