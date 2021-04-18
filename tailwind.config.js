module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    boxShadow: {
      lg:
        "10px 10px 0px 3px rgba(227,227,227,1), 10px 10px 0px 3px rgba(227,227,227,1);",
      lghover: "10px 10px 0px 3px rgba(227,227,227,1), 10px 10px 0px 3px blue;",
    },
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
