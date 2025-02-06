import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "semantic-ui-react";

import NavBar from "./Navbar";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
