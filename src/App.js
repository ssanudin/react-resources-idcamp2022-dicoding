import React from "react";
import { getResources } from "./utils/data-resources";

const Resource = ({ resource }) => {
  const { resource: res, title } = resource;

  return (
    <section className={`resource`}>
      <h3>{title}</h3>
      <ul>
        {res.map((r) => {
          return (
            <li>
              <a href={r.url} target="_blank" rel="noreferrer">
                {r.title}
              </a>
              {r.publisher && (
                <span className="publisher">{`by ${r.publisher}`}</span>
              )}
              {r.recommended && (
                <span className="recommended">{`(recommended)`}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const App = () => {
  const resources = getResources();

  return (
    <div className="app-container">
      <header>
        <h1>React - IDCamp 2022 Resources</h1>
      </header>
      <main>
        <section className="resources">
          <h2>Resources List</h2>
          {resources.map((resource) => (
            <Resource resource={resource} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
