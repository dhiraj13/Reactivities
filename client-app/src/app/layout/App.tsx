import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import NavBar from "./Navbar";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import HomePage from "../../features/home/HomePage";
import ModalContainer from "../common/modals/ModalContainer";

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded)
    return <LoadingComponent content="Loading app..." />;

  return (
    <>
      <ScrollRestoration />
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        hideProgressBar
        theme="colored"
      />
      <ModalContainer />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
