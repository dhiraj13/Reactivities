import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container } from "semantic-ui-react";

import NavBar from "./Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
