const sharedRules = {
  // Next.js has a Link component that's used when navigating to an internal
  // route. Using the component requires us to use an <a> element as its
  // child. Instead of passing a href attribute to directly to the <a>
  // element, we pass it as a prop to the Link component. This raises a very
  // common accessibility issue of an anchor tag with no href.
  "jsx-a11y/anchor-is-valid": [
    `error`,
    {
      components: [`Link`],
      specialLink: [`hrefLeft`, `hrefRight`],
      aspects: [`invalidHref`, `preferButton`],
    },
  ],
  "react/jsx-filename-extension": `off`,
  "react/jsx-sort-props": `error`,
  "react/prop-types": `off`,
  "react/react-in-jsx-scope": `off`,
  "react/require-default-props": `off`,
  "simple-import-sort/imports": `error`,
  "simple-import-sort/exports": `error`,
  quotes: [`error`, `backtick`],
};

const sharedPlugins = [`simple-import-sort`];

module.exports = {
  root: true,
  parser: `babel-eslint`,
  extends: [
    `airbnb`,
    `airbnb/hooks`,
    `plugin:mdx/recommended`,
    `plugin:prettier/recommended`,
  ],
  env: {
    browser: true,
  },
  plugins: sharedPlugins,
  rules: {
    "import/extensions": [
      `error`,
      `ignorePackages`,
      {
        js: `never`,
        jsx: `never`,
        ts: `never`,
        tsx: `never`,
      },
    ],
    ...sharedRules,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
  },
  overrides: [
    {
      extends: [
        `airbnb-typescript`,
        `airbnb/hooks`,
        `plugin:@typescript-eslint/eslint-recommended`,
        `plugin:@typescript-eslint/recommended`,
        `plugin:@typescript-eslint/recommended-requiring-type-checking`,
        `plugin:prettier/recommended`,
      ],
      files: [`**/*.ts`, `**/*.tsx`],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        project: `./tsconfig.json`,
      },
      plugins: sharedPlugins,
      rules: {
        ...sharedRules,
      },
    },
    {
      files: [`*.mdx`],
      extends: [`plugin:mdx/overrides`],
    },
  ],
};
