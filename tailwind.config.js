/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        dynamic: ["100dvh"],
      },
      maxHeight: {
        dynamic: ["100dvh"],
      },
    },
  },
  plugins: [],
};
