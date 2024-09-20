import eslintPluginPrettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    name: "portfolio/recommended",
    files: ["src/**/*.tsx", "src/**/*.ts"],
    ignores: ["*.log, node_modules, vite.config.ts, release, .idea"],
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": tsPlugin,
      "react-plugin": reactPlugin,
      "react-hooks-plugin": reactHooksPlugin,
    },
    rules: {
      semi: ["warn", "always"],
      "no-await-in-loop": "error",
      "no-constant-binary-expression": "error",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-use-before-define": "error",
      curly: "error",
      "no-lonely-if": "error",
      "no-else-return": "error",
      "no-unneeded-ternary": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "require-await": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
          custom: {
            regex: "^(I|T|E)[A-Z]",
            match: false,
          },
        },
      ],
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 12,
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
    },
  },
];
