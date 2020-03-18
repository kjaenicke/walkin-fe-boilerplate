// const path = require("path");

// module.exports = {
//   stories: [
//     "../src/**/*.stories.(ts|tsx|js|jsx|mdx)",
//     "../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)",
//     "../src/components/**/**/*.stories.(ts|tsx|js|jsx|mdx)"
//   ],
//   addons: [
//     "@storybook/addon-actions",
//     "@storybook/addon-links",
//     {
//       name: "@storybook/addon-docs",
//       options: {
//         configureJSX: true
//       }
//     },
//     {
//       name: "@storybook/preset-create-react-app",
//       options: {
//         tsDocgenLoaderOptions: {
//           tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
//         }
//       }
//     }
//   ]
// };

const path = require("path");

module.exports = {
  stories: ["../src/**/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "storybook-addon-jsx/register",
    "@storybook/addon-viewport/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
		},
		'@storybook/addon-knobs/register'
  ]
};
