import React, { useState } from "react";
import TaskQueue from "./Components/Tasks/tasks-queue";
import "./App.css";
import TaskSection from "./Components/TaskSection/task-section-column";
import CheckIcon from './assets/CheckIcon.png'

const App = () => {
  const [tasks, setTasks]  = useState([])
  console.log(tasks)
  return (
    <div className="app">
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>Jira Board</h1>
        <TaskQueue setTasks={setTasks} />

      <div className="task__section">
        <TaskSection title="Ready For Development" tasks={tasks} status="Ready For Development" />
        <TaskSection title="In Progress" tasks={tasks} status="In Progress" />
        <TaskSection title="Ready For QA" tasks={tasks} status="Ready For QA" />
        <TaskSection title="Closed" icon={CheckIcon} tasks={tasks} status="Closed" />
      </div>
    </div>
  );
};

export default App;
