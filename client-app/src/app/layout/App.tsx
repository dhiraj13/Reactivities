import { Outlet, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container } from "semantic-ui-react";

import NavBar from "./Navbar";
import HomePage from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        hideProgressBar
        theme="colored"
      />
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
