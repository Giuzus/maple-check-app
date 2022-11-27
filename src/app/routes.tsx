import Header from './header/header';
import ErrorPage from './error-page/error-page';
import Checklists from './checklists/checklists';
import { RouteObject } from 'react-router'
import Tasks from './tasks/tasks';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
      {
        path: "checklists",
        element: <Checklists />,
      }
    ]
  }
]

export default routes;