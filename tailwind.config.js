const { Background } = require("@react-navigation/elements");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors : {
      Background: {
        light: "fff8e7",
        dark: "#1F1B24"
      },
      ThemedText: {
        Primary : {
          light: '#2C5F2D',
          dark: '#A8D5BA',
        },
        Secondary : {
          light: '7E7E7E',
          dark: '#A9A9A9',
      },
      warning : {
        primary : '#ffe900',
      },
      danger : {
        primary : '#d9534f',
    },
    },

  },
  plugins: [],
}
