import HeaderLayout from './header-layout/header-layout';
import ErrorPage from './error-page/error-page';
import Characters from './characters/characters';
import Checklists from './checklists/checklists';
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HeaderLayout />,
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