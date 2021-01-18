const merge = require("lodash.merge");
const plugin = require("./index.js");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

const generatePluginCss = (testConfig = {}, pluginOptions = {}) => {
  const sandboxConfig = {
    theme: {
      colors: {
        royalblue: {
          400: "#5fa7fa",
          500: "#2f7af9",
        },
        indigo: {
          400: "#8994fa",
          500: "#6066fa",
        },
      },
    },
    corePlugins: false,
    plugins: [plugin(pluginOptions)],
  };
  const postcssPlugins = [tailwindcss(merge(sandboxConfig, testConfig))];

  return postcss(postcssPlugins)
    .process("@tailwind utilities", { from: undefined })
    .then((result) => result.css);
};

expect.extend({ toMatchCss: require("jest-matcher-css") });

test("generates default utilities and active variants", () => {
  const testConfig = {};
  const expectedCss = `
  .caret-royalblue-400 {
    caret-color: #5fa7fa
  }

  .caret-royalblue-500 {
    caret-color: #2f7af9
  }

  .caret-indigo-400 {
    caret-color: #8994fa
  }

  .caret-indigo-500 {
    caret-color: #6066fa
  }

  .active\\:caret-royalblue-400:active {
    caret-color: #5fa7fa
  }

  .active\\:caret-royalblue-500:active {
    caret-color: #2f7af9
  }
  
  .active\\:caret-indigo-400:active {
    caret-color: #8994fa
  }

  .active\\:caret-indigo-500:active {
    caret-color: #6066fa
  }
`;

  return generatePluginCss(testConfig).then((css) =>
    expect(css).toMatchCss(expectedCss)
  );
});

test("generates dark variants", () => {
  const testConfig = { darkMode: "media" };
  const expectedCss = `
  .caret-royalblue-400 {
    caret-color: #5fa7fa
  }

  .caret-royalblue-500 {
    caret-color: #2f7af9
  }

  .caret-indigo-400 {
    caret-color: #8994fa
  }

  .caret-indigo-500 {
    caret-color: #6066fa
  }

  .active\\:caret-royalblue-400:active {
    caret-color: #5fa7fa
  }

  .active\\:caret-royalblue-500:active {
    caret-color: #2f7af9
  }
  
  .active\\:caret-indigo-400:active {
    caret-color: #8994fa
  }

  .active\\:caret-indigo-500:active {
    caret-color: #6066fa
  }

  @media (prefers-color-scheme: dark) {
    .dark\\:caret-royalblue-400 {
      caret-color: #5fa7fa
    }

    .dark\\:caret-royalblue-500 {
      caret-color: #2f7af9
    }

    .dark\\:caret-indigo-400 {
      caret-color: #8994fa
    }

    .dark\\:caret-indigo-500 {
      caret-color: #6066fa
    }

    .dark\\:active\\:caret-royalblue-400:active {
      caret-color: #5fa7fa
    }

    .dark\\:active\\:caret-royalblue-500:active {
      caret-color: #2f7af9
    }

    .dark\\:active\\:caret-indigo-400:active {
      caret-color: #8994fa
    }

    .dark\\:active\\:caret-indigo-500:active {
      caret-color: #6066fa
    }
  }
`;

  return generatePluginCss(testConfig).then((css) =>
    expect(css).toMatchCss(expectedCss)
  );
});

test("variants can be customized", () => {
  const testConfig = {
    variants: {
      caretColor: ["hover"],
    },
  };
  const expectedCss = `
  .caret-royalblue-400 {
    caret-color: #5fa7fa
  }

  .caret-royalblue-500 {
    caret-color: #2f7af9
  }

  .caret-indigo-400 {
    caret-color: #8994fa
  }

  .caret-indigo-500 {
    caret-color: #6066fa
  }

  .hover\\:caret-royalblue-400:hover {
    caret-color: #5fa7fa
  }

  .hover\\:caret-royalblue-500:hover {
    caret-color: #2f7af9
  }
  
  .hover\\:caret-indigo-400:hover {
    caret-color: #8994fa
  }

  .hover\\:caret-indigo-500:hover {
    caret-color: #6066fa
  }
  `;

  return generatePluginCss(testConfig).then((css) =>
    expect(css).toMatchCss(expectedCss)
  );
});
