module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ["react", "@typescript-eslint"],
  extends: ["airbnb-typescript", "prettier", "prettier/@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-use-before-define": "off",
    "no-return-await": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-empty-interface": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/first": "warn",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "implicit-arrow-linebreak": "off",
    "no-confusing-arrow": "off",
    "linebreak-style": ["error", "windows"],
  },
};
