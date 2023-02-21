module.exports = {
  extends: ["turbo", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [],
  "rules": {
    "array-callback-return": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off"
  },
  "overrides": [
    {
      "files": ["**/*.ts?(x)"],
      "rules": {}
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "serviceworker": true
  }
};
