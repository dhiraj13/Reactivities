import { When } from "react-if";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import ActivityList from "./ActivityList";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <When condition={!!selectedActivity && !editMode}>
          <ActivityDetails />
        </When>
        <When condition={editMode}>
          <ActivityForm />
        </When>
      </Grid.Column>
    </Grid>
  );
});
