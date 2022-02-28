import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  // below are for modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  console.log("inside appt: ", props);

  //const {interview} = props.interview;
  //const {interviewer} = props.interview;

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // delete confirmation function
  function confirmDelete() {
    transition(CONFIRM);
  };
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={()=> transition(EDIT)}
        />
      )}
      {/* {props.time ? <p>Appointment at {props.time}</p> : <p>No Appointments</p>} */}
    </article>
  );
}
