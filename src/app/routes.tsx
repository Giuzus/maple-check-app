import Header from './header/header';
import ErrorPage from './error-page/error-page';
import Characters from './characters/characters';
import Checklists from './checklists/checklists';
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Characters />,
      },
      {
        path: "checklists",
        element: <Checklists />,
      }
    ],
  }
]

export default routes;