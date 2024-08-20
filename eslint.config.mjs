import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import parser from "astro-eslint-parser";
import astro from "eslint-plugin-astro";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/.husky", "**/.vscode", "**/node_modules", "**/public", "**/dist"],
  },
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
    "plugin:tailwindcss/recommended",
  ),
  {
    plugins: {
      prettier,
      tailwindcss,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
      },
    },

    settings: {
      tailwindcss: {
        config: "tailwind.config.js",
      },
    },

    rules: {
      "tailwindcss/classnames-order": "off",
    },
  },
  ...compat.extends("plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended").map((config) => ({
    ...config,
    files: ["**/*.astro"],
  })),
  {
    files: ["**/*.astro"],

    plugins: {
      astro,
      "jsx-a11y": jsxA11Y,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...astro.environments.astro.globals,
      },

      parser: parser,
      ecmaVersion: 5,
      sourceType: "commonjs",

      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json",
      },
    },

    rules: {
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
