import { Else, If, Then } from "react-if";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Grid, Loader } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";

import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";
import { useStore } from "../../../app/stores/store";
import { PagingParams } from "../../../app/models/pagination";
import ActivityListItemPlaceholder from "./ActivityListItemPlaceholder";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, setPagingParams, pagination } =
    activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => setLoadingNext(false));
  }

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  return (
    <Grid>
      <Grid.Column width="10">
        <If
          condition={
            activityStore.loadingInitial &&
            activityRegistry.size === 0 &&
            !loadingNext
          }
        >
          <Then>
            <>
              <ActivityListItemPlaceholder />
              <ActivityListItemPlaceholder />
            </>
          </Then>
          <Else>
            <InfiniteScroll
              pageStart={0}
              loadMore={handleGetNext}
              hasMore={
                !loadingNext &&
                !!pagination &&
                pagination.currentPage < pagination.totalPages
              }
              initialLoad={false}
            >
              <ActivityList />
            </InfiniteScroll>
          </Else>
        </If>
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
});
