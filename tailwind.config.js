module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: {
          100: "#990D81",
          200: "#5F2EEA",
        },
        customGreen: {
          100: "#4BDE97",
          200: "#4BDE97",
        },
        customYellow: "#FFB648",
        customRed: "#F26464",
        customBlue: "#2F49D1",
        customGray: "#E5E5E5",
      },
      boxShadow: {
        custom: "0px 0px 25px rgba(0, 0, 0, 0.06);",
        custom1: "0px 20px 27px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
