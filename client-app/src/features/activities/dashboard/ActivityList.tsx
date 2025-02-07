import { observer } from "mobx-react-lite";
import { Header } from "semantic-ui-react";
import { Fragment } from "react/jsx-runtime";

import ActivityListItem from "./ActivityListItem";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
  const {
    activityStore: { groupedActivities },
  } = useStore();

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
