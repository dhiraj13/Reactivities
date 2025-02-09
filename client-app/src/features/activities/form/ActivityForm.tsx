import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityForm() {
  const {
    activityStore: {
      createActivity,
      updateActivity,
      loading,
      loadActivity,
      loadingInitial,
    },
  } = useStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity | undefined>({
    id: "",
    category: "",
    city: "",
    date: "",
    description: "",
    title: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleSubmit() {
    if (activity) {
      if (!activity.id) {
        activity.id = uuid();
        createActivity(activity).then(() =>
          navigate(`/activities/${activity.id}`)
        );
      } else {
        updateActivity(activity).then(() =>
          navigate(`/activities/${activity.id}`)
        );
      }
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity!, [name]: value });
  }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity?.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity?.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity?.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          type="date"
          placeholder="Date"
          value={activity?.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity?.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity?.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          as={Link}
          to="/activities"
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
});
