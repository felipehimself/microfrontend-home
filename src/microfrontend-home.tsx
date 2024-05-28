import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import rootComponent from './app';
import { MfeNavRoutes } from './routes/navbar-routes';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,

  errorBoundary(_, __, ___) {
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const routes = MfeNavRoutes;
