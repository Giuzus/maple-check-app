import React, { FC } from 'react';
import styles from './error-page.module.css';
import { useRouteError } from "react-router-dom";

interface ErrorPageProps { }

const ErrorPage: FC<ErrorPageProps> = () => {

  const error: any = useRouteError();
  console.error(error);

  return (
    <div className={styles.ErrorPage} data-testid="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
