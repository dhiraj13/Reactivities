import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "activities",
        element: <ActivityDashboard />,
      },
      {
        path: "activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "create-activity",
        element: <ActivityForm key='create' />,
      },
      {
        path: "manage/:id",
        element: <ActivityForm key='manage' />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
