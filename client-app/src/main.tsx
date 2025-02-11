import { StrictMode } from "react";
import "semantic-ui-css/semantic.min.css";
import "react-calendar/dist/Calendar.css";
import "react-toastify/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./app/layout/styles.css";
import { router } from "./app/router/Routes";
import { store, StoreContext } from "./app/stores/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>
);
