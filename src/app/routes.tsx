import HeaderLayout from './header-layout/header-layout';
import ErrorPage from './error-page/error-page';
import Checklists from './checklists/checklists';
import { RouteObject } from 'react-router'
import CharactersPage from './characters-page/characters-page';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CharactersPage />,
      },
      {
        path: "checklists",
        element: <Checklists />,
      }
    ]
  }
]

export default routes;