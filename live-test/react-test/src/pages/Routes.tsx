import Counter from "./Couter";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/toggle-switch",
    element: <ToggleSwitch />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
