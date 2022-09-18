const resources = [
  {
    title: "Materi & Package",
    resource: [
      { title: "React Website", url: "https://reactjs.org/" },
      { title: "prop-types", url: "https://www.npmjs.com/package/prop-types" },
      { title: "react-router", url: "https://reactrouter.com/en/main" },
      {
        title: "react-icons",
        url: "https://www.npmjs.com/package/react-icons",
      },
    ],
  },
  {
    title: "Artikel Bacaan",
    resource: [
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
    ],
  },
  {
    title: "VS Code Extensions",
    resource: [
      {
        title: "ES7+ React/Redux/React-Native snippets",
        url: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
        publisher: "dsznajder",
        recommended: true,
      },
    ],
  },
];

const getResources = () => {
  return resources;
};

export { getResources };
