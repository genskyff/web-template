import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";

export default ts.config([
  globalIgnores(["dist"]),
  {
    plugins: {
      prettier,
    },
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      ...prettier.configs.recommended.rules,
    },
  },
]);
