import globals from "globals"
import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

/** @type {import("eslint-config")} */
export default [
  {
    files: ["main.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
      ignores: ["./dist/"],
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
]
