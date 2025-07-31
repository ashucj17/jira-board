import React from "react";
import TaskQueue from "./Components/Tasks/tasks-queue";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* <header className="app__header"></header> */}
        <h1 style={{ textAlign: "center", margin: "50px auto" }}>Jira Board</h1>
        <TaskQueue />
      
      <div className="app__section">
        <section className="section">section1</section>
        <section className="section">section2</section>
        <section className="section">section3</section>
        <section className="section">section4</section>
      </div>
    </div>
  );
};

export default App;
