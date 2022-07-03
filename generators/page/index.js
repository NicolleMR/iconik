/**
 * Page Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a page component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or page with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../src/pages/{{dashCase name}}/{{properCase name}}.jsx",
        templateFile: "./page/page.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/pages/{{properCase name}}/index.js",
        templateFile: "./page/index.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/pages/{{dashCase name}}/{{properCase name}}.scss",
        templateFile: "./page/page.scss.hbs",
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/pages/",
    });

    return actions;
  },
};
