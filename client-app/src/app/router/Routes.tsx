import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

import App from "../layout/App";
import RequireAuth from "./RequireAuth";
import NotFound from "../../features/errors/NotFound";
import TestErrors from "../../features/errors/TestError";
import ServerError from "../../features/errors/ServerError";
import ProfilePage from "../../features/profiles/ProfilePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
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
            element: <ActivityForm key="create" />,
          },
          {
            path: "manage/:id",
            element: <ActivityForm key="manage" />,
          },
          {
            path: "profiles/:username",
            element: <ProfilePage />,
          },
          {
            path: "errors",
            element: <TestErrors />,
          },
        ],
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
      {
        path: "server-error",
        element: <ServerError />,
      },
      {
        path: "*",
        element: <Navigate replace to="/not-found" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
