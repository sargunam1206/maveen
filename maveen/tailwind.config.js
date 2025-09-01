// /** @type {import('tailwindcss').Config} */
// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0050A0",   // Blue
//         secondary: "#FFFFFF", // White
//         accent: "#D62828",    // Red
//         neutral: {
//           light: "#F5F5F5",   // Light Gray
//           dark: "#222222",    // Dark Gray
//         },
//       },
//       fontFamily: {
//         heading: ["Poppins", "sans-serif"],
//         body: ["Roboto", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0050A0",   // Blue
        secondary: "#FFFFFF", // White
        accent: "#D62828",    // Red
        neutral: {
          light: "#F5F5F5",   // Light Gray
          dark: "#222222",    // Dark Gray
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
