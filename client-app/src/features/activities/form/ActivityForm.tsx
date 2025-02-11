import { Formik, Form, Field } from "formik";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Segment } from "semantic-ui-react";
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

  const [activity, setActivity] = useState<Activity>({
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

  // function handleSubmit() {
  //   if (activity) {
  //     if (!activity.id) {
  //       activity.id = uuid();
  //       createActivity(activity).then(() =>
  //         navigate(`/activities/${activity.id}`)
  //       );
  //     } else {
  //       updateActivity(activity).then(() =>
  //         navigate(`/activities/${activity.id}`)
  //       );
  //     }
  //   }
  // }

  // function handleInputChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value } = event.target;
  //   setActivity({ ...activity!, [name]: value });
  // }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Formik
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <Field placeholder="Title" name="title" />
            <Field placeholder="Description" name="description" />
            <Field placeholder="Category" name="category" />
            <Field type="date" placeholder="Date" name="date" />
            <Field placeholder="City" name="city" />
            <Field placeholder="Venue" name="venue" />
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
        )}
      </Formik>
    </Segment>
  );
});
