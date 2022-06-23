module.exports = {
  mode: "jit",
  purge: ["*.html", "tailwind.css"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#008BC5",
        secondary: "#00AFEF",
      },

      backgroundImage: {
        "bg-image-primary": "url('img/bg.png",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
