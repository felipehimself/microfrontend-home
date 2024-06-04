import { usePageStyles } from '@/styles';

export const Home = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.container}>
      <h2>Microfrontend Project with Single SPA</h2>
      <p>
        This project implements a microfrontend architecture using <a href="https://single-spa.js.org/" target="_blank" rel="noreferrer">Single SPA</a>.
      </p>
      <p>
        Each microfrontend is built with React and bundled with Vite, each of
        them has its own pipeline for two environments,{' '}
        <a
          href="https://dev-microfrontend-project.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          development
        </a>{' '}
        and{' '}
        <a
          href="https://microfrontend-project.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          production
        </a>
        , and they are served by Nginx deployed using Docker images.
      </p>
      <p>There are a total of 6 microfrontends as follows:</p>
      <ul>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-root"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Root
          </a>
        </li>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-navbar"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Navbar
          </a>
        </li>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-home"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Home
          </a>
        </li>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-announcements"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Announcements
          </a>
        </li>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Dashboard
          </a>
        </li>
        <li>
          <a
            href="https://github.com/felipehimself/microfrontend-jobpostings"
            target="_blank"
            rel="noreferrer"
          >
            Microfrontend Jobposting
          </a>
        </li>
      </ul>

      <p>
        Additionally, there is a shared <a href="https://www.npmjs.com/package/@mfe-lib/styleguide" target="_blank" rel="noreferrer">styleguide package</a> to ensure consistent
        styling across all microfrontends.
      </p>

      <h3>Getting Started</h3>
      <p>To get started with the project, ensure you have cloned the repositories in the list above and have the following tools installed:</p>
      <ul>
        <li><a href="https://www.git-scm.com/downloads">Git</a></li>
        <li><a href="https://nodejs.org/en">NodeJs</a></li>
        <li><a href="https://learn.microsoft.com/en-us/windows/wsl/install">WSL (if your OS is Windows)</a></li>
      </ul>
      <p>Just go inside each cloned project and run:</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <code>npm install</code>
        <code>npm run dev</code>
      </div>
      <p>
        The only exception is the microfrontend root project which you have to run <code>npm start</code>
      </p>
    </div>
  );
};
