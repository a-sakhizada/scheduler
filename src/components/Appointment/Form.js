import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  function reset() {
    setStudent("");
    setInterviewer(null);
  }

  function cancel() {
    reset();
    props.onCancel();
  }

  // empty student name and unselected interviewer should not save
  function saveError() {
    if (student === "") {
      setError("Name can't be blank.");
      return;
    }
    if (interviewer === null) {
      setError("Interviewer can't be unselected.");
      return;
    }
    props.onSave(student, interviewer);
    setError("");
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            value={student}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>

        <section className="appointment__validation">{error}</section>

        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
          /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => cancel(student)} danger>
            Cancel
          </Button>
          <Button onClick={saveError} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
