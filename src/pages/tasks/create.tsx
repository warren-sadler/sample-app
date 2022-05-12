import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";

export default function CreateTask() {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState("");
  const isTitleValid = useMemo(
    function () {
      return Boolean(taskTitle.trim());
    },
    [taskTitle]
  );
  const onTitleInput = useCallback(
    function (e: React.ChangeEvent<HTMLInputElement>) {
      setTaskTitle(e.target.value);
    },
    [setTaskTitle]
  );
  const handleSubmit = useCallback(
    function () {
      if (!isTitleValid) return;
      fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: taskTitle,
        }),
      }).then(function () {
        router.push("/tasks");
      });
    },
    [isTitleValid, taskTitle, router]
  );
  return (
    <>
      <header>
        <h1>Create New Task</h1>
      </header>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="title">New Task Title</label>
          <input
            type="text"
            onChange={onTitleInput}
            placeholder="Enter New Task Title"
            value={taskTitle}
          />
          <button disabled={!isTitleValid}>Submit</button>
        </div>
      </form>
    </>
  );
}
