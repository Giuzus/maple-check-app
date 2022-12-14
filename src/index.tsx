import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from './app/routes';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createHashRouter(routes);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
