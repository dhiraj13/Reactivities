import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import { When } from "react-if";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityDashboard({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6">
        <When condition={!!selectedActivity && !editMode}>
          <ActivityDetails
            activity={selectedActivity!}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        </When>
        <When condition={editMode}>
          <ActivityForm
            activity={selectedActivity}
            closeForm={closeForm}
            createOrEdit={createOrEdit}
          />
        </When>
      </Grid.Column>
    </Grid>
  );
}
