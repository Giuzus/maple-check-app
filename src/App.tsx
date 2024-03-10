import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.page.tsx";

const router = createBrowserRouter([{ path: "/", element: <Home /> }], {
  basename: "/maple-check-app",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
