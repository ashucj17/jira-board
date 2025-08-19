import React, { useEffect, useState } from "react";
import TaskQueue from "./Components/Tasks/tasks-queue";
import "./App.css";
import TaskSection from "./Components/TaskSection/task-section-column";
import CheckIcon from './assets/CheckIcon.png'

const existingTask = localStorage.getItem('tasks')
console.log("existingTaskrst", JSON.parse(existingTask))

const App = () => {
  const [tasks, setTasks]  = useState(JSON.parse(existingTask) || []);


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const [activeCard, setActiveCard] =useState(null)

    const handleDelete = (taskIndex)=>{
     const newTask =  tasks.filter((tasks,index) => index !== taskIndex)
            setTasks(newTask)
    }

  const onDrop = (status, position) =>{
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)
<<<<<<< HEAD

    if(activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove, status: status,
    })
    setTasks(updatedTasks);
=======
>>>>>>> 8b512378dd474c60d2de1324dcb02d5f9b2ab9fb
  }


  return (
    <div className="app">
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>Jira Board</h1>
        <TaskQueue setTasks={setTasks} />

      <div className="task__section">
        <TaskSection title="Ready For Development" tasks={tasks} status="Ready For Development" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskSection title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskSection title="Ready For QA" tasks={tasks} status="Ready For QA" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskSection title="Closed" icon={CheckIcon} tasks={tasks} status="Closed" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </div>
    </div>
  );
};

export default App;
