import React from "react";
import TaskQueue from "./Components/Tasks/tasks-queue";
import "./App.css";
import TaskSection from "./Components/TaskSection/task-section-column";
import CheckIcon from './assets/CheckIcon.png'

const App = () => {
  return (
    <div className="app">
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>Jira Board</h1>
        <TaskQueue />

      <div className="task__section">
        <TaskSection title="Ready For Development"/>
        <TaskSection title="In Progress"/>
        <TaskSection title="Ready For QA"/>
        <TaskSection title="Closed" icon={CheckIcon}/>
      </div>
    </div>
  );
};

export default App;
