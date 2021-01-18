const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  ({ className = "caret" } = {}) => {
    return ({ e, addUtilities, theme, variants }) => {
      const colors = theme("colors");

      const caretColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          return {
            ...acc,
            [`.${className}-${e(key)}`]: {
              "caret-color": colors[key],
            },
          };
        }

        const colorShades = Object.keys(colors[key]);

        return {
          ...acc,
          ...colorShades.reduce(
            (a, shade) => ({
              ...a,
              [`.${className}-${e(key)}-${shade}`]: {
                "caret-color": colors[key][shade],
              },
            }),
            {}
          ),
        };
      }, {});

      addUtilities(caretColors, variants("caretColor"));
    };
  },
  () => ({
    variants: { caretColor: ["dark", "active"] },
  })
);
