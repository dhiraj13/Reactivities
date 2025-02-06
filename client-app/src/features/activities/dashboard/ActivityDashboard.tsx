import { When } from "react-if";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import ActivityList from "./ActivityList";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";

interface Props {
  activities: Activity[];
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default observer(function ActivityDashboard({
  activities,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </Grid.Column>
      <Grid.Column width="6">
        <When condition={!!selectedActivity && !editMode}>
          <ActivityDetails />
        </When>
        <When condition={editMode}>
          <ActivityForm createOrEdit={createOrEdit} submitting={submitting} />
        </When>
      </Grid.Column>
    </Grid>
  );
});
