// ESLint v9 flat config targeting Drupal 11.2 and 11.3

import { defineConfig } from "eslint/config";
import drupalPlugin from "eslint-plugin-drupal";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsonPlugin from "eslint-plugin-json";
import ymlPlugin from "eslint-plugin-yml";

export default defineConfig([
  {
    // ** JavaScript files config **
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["node_modules/"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        Drupal: "readonly",
        drupalSettings: "readonly",
        drupalTranslations: "readonly",
        once: "readonly",
        $: "readonly",
        jQuery: "readonly"
      }
    },
    plugins: {
      drupal: drupalPlugin,
      jsdoc: jsdocPlugin
    },
    extends: [
      "airbnb-base",
      "plugin:drupal/recommended",
      jsdocPlugin.configs["flat/recommended-error"]
    ],
    rules: {
      // ** Custom rule adjustments (if any) **
      "jsdoc/check-tag-names": ["error", { "preferredTags": { "returns": "return" } }]
    }
  },

  {
    // ** JSON files config **
    files: ["**/*.json"],
    plugins: {
      json: jsonPlugin
    },
    extends: ["plugin:json/recommended-with-comments"]
  },
  {
    // ** YAML files config **
    files: ["**/*.yml", "**/*.yaml"],
    plugins: {
      yml: ymlPlugin
    },
    extends: ["plugin:yml/standard"]
  }
]);
