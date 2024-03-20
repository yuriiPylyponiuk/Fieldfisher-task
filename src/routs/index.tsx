import { createBrowserRouter } from "react-router-dom";
import { AddNewCase } from "./AddNewCase";
import { CaseList } from "./CaseList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AddNewCase />,
  },
  {
    path: "/list",
    element: <CaseList />,
  },
]);
