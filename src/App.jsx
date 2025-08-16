import React, { useEffect, useState } from "react";
import TaskQueue from "./Components/Tasks/tasks-queue";
import "./App.css";
import TaskSection from "./Components/TaskSection/task-section-column";
import CheckIcon from './assets/CheckIcon.png'

const existingTask = localStorage.getItem('tasks')
console.log("existingTaskrst", JSON.parse(existingTask))

const App = () => {
  const [tasks, setTasks]  = useState(JSON.parse(existingTask));


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

    const handleDelete = (taskIndex)=>{
     const newTask =  tasks.filter((tasks,index) => index !== taskIndex)
            setTasks(newTask)
    }


  return (
    <div className="app">
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>Jira Board</h1>
        <TaskQueue setTasks={setTasks} />

      <div className="task__section">
        <TaskSection title="Ready For Development" tasks={tasks} status="Ready For Development" handleDelete={handleDelete} />
        <TaskSection title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete} />
        <TaskSection title="Ready For QA" tasks={tasks} status="Ready For QA" handleDelete={handleDelete} />
        <TaskSection title="Closed" icon={CheckIcon} tasks={tasks} status="Closed" handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
