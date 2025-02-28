import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, Grid, Header, TabPane } from "semantic-ui-react";

import ProfileCard from "./ProfileCard";
import { useStore } from "../../app/stores/store";

export default observer(function ProfileFollowings() {
  const { profileStore } = useStore();
  const { profile, followings, loadFollowings, loadingFollowings } =
    profileStore;

  useEffect(() => {
    loadFollowings("following");
  }, [loadFollowings]);

  return (
    <TabPane loading={loadingFollowings}>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="user"
            content={`People following ${profile?.displayName}`}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {followings.map((profile) => (
              <ProfileCard key={profile.username} profile={profile} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </TabPane>
  );
});
