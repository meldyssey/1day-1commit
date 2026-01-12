import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
