import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

import App from "../layout/App";
import NotFound from "../../features/errors/NotFound";
import LoginForm from "../../features/users/LoginForm";
import TestErrors from "../../features/errors/TestError";
import ServerError from "../../features/errors/ServerError";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ProfilePage from "../../features/profiles/ProfilePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
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
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "errors",
        element: <TestErrors />,
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
