import { observer } from "mobx-react-lite";
import { Header } from "semantic-ui-react";
import { Fragment } from "react/jsx-runtime";

import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const {
    activityStore: { groupedActivities },
  } = useStore();

  console.log(groupedActivities, "grouped");

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
