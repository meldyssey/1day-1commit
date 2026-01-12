import Counter from "./Couter";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
