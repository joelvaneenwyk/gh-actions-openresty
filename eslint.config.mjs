import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import("eslint-config")} */
export default [
  {
    files: ["main.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended
];
