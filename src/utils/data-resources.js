const resources = [
  {
    title: "Materi",
    resource: [
      { title: "React Website", url: "https://reactjs.org/" },
      { title: "MDN", url: "https://developer.mozilla.org/en-US/" },
      { title: "W3Schools", url: "https://www.w3schools.com/" },
      { title: "devdocs.io", url: "https://devdocs.io/" },
      {
        title: "React - Where To Get Support",
        url: "https://reactjs.org/community/support.html",
      },
      {
        title: "Airbnb React/JSX Style Guide",
        url: "https://github.com/airbnb/javascript/tree/master/react",
        recommended: true,
      },
      {
        title: "fullstackreact/30-days-of-react",
        url: "https://github.com/fullstackreact/30-days-of-react",
      },
    ],
  },
  {
    title: "Package",
    resource: [
      { title: "prop-types", url: "https://www.npmjs.com/package/prop-types" },
      { title: "react-router", url: "https://reactrouter.com/en/main" },
      {
        title: "react-icons",
        url: "https://www.npmjs.com/package/react-icons",
      },
      { title: "uuid", url: "https://www.npmjs.com/package/uuid" },
      {
        title: "A List of Useful npm Packages for React Developers",
        url: "https://dev.to/manindu/a-list-of-useful-npm-packages-for-react-developers-3dhg",
      },
    ],
  },
  {
    title: "Artikel Bacaan",
    resource: [
      {
        title: "GitHub Pages",
        url: "https://pages.github.com/",
        recommended: true,
      },
      {
        title: "Best Practices for React",
        url: "https://www.freecodecamp.org/news/best-practices-for-react/",
        recommended: true,
      },
      {
        title: "React Cheatsheet",
        url: "https://www.freecodecamp.org/news/the-react-cheatsheet/",
        recommended: true,
      },
      {
        title: "ReactJS - .JS vs .JSX",
        url: "https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx",
        recommended: false,
      },
      {
        title: "Using Node.js require vs. ES6 import/export",
        url: "https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export",
        recommended: false,
      },
      {
        title: "Roadmap React Developer",
        url: "https://roadmap.sh/react",
        recommended: false,
      },
    ],
  },
  {
    title: "VS Code Extensions",
    resource: [
      {
        title: "ES7+ React/Redux/React-Native snippets",
        url: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
        publisher: "dsznajder",
        code: "dsznajder.es7-react-js-snippets",
        recommended: true,
      },
      {
        title: "Prettier - Code formatter",
        url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
        publisher: "Prettier",
        code: "esbenp.prettier-vscode",
        recommended: true,
      },
      {
        title: "Auto Close Tag",
        url: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
        publisher: "Jun Han",
        code: "formulahendry.auto-close-tag",
        recommended: true,
      },
      {
        title: "Auto Rename Tag",
        url: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
        publisher: "Jun Han",
        code: "formulahendry.auto-rename-tag",
        recommended: true,
      },
      {
        title: "ESLint",
        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        publisher: "Microsoft",
        code: "dbaeumer.vscode-eslint",
        recommended: true,
      },
      {
        title: "Babel JavaScript",
        url: "https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel",
        publisher: "Michael McDermott",
        code: "mgmcdermott.vscode-language-babel",
        recommended: true,
      },
      {
        title: "vscode-icons",
        url: "https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons",
        publisher: "VSCode Icons Team",
        code: "vscode-icons",
        recommended: true,
      },
      {
        title: "stylelint-plus",
        url: "https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus",
        publisher: "Hex",
        code: "dbaeumer.vscode-eslint",
        recommended: false,
      },
      {
        title: "Chrome Ext - React Developer Tools",
        url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
        publisher: "Meta",
        recommended: true,
      },
      {
        title: "Firefox Ext - React Developer Tools",
        url: "https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/",
        publisher: "Meta",
        recommended: true,
      },
    ],
  },
  {
    title: "YouTube & Podcast",
    resource: [
      {
        title: "freeCodeCamp.org ",
        url: "https://www.youtube.com/c/Freecodecamp",
      },
      { title: "Scrimba", url: "https://www.youtube.com/c/Scrimba" },
      {
        title: "Traversy Media",
        url: "https://www.youtube.com/c/TraversyMedia",
      },
      {
        title: "Coder Coder ",
        url: "https://www.youtube.com/c/TheCoderCoder",
      },
      {
        title: "Podcast - The ReadME Podcast",
        url: "https://open.spotify.com/show/660KitvdJDX2vUmioAbwSQ?si=50db8f12a9454642",
        publisher: "Github",
      },
      {
        title: "Podcast - The freeCodeCamp Podcast",
        url: "https://open.spotify.com/show/7CpuEnbCLIXwI6LEcbBOYP?si=3494c040c9d74c83",
        publisher: "freeCodeCamp.org",
      },
      {
        title: "Podcast - The Scrimba Podcast",
        url: "spotify:show:1oJamVudy2v3oSJTejUyus",
        publisher: "Scrimba",
      },
    ],
  },
];

const getResources = () => {
  return resources;
};

export { getResources };
