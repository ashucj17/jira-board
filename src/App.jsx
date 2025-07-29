import React from "react";
import './app.css'

const App = () =>{
  return(
    <div className="app">
    <header className="app__header">
      <h1>Jira Board</h1>
    </header>
    <div className="app__section">
      <section className="section">section1</section>
      <section className="section">section2</section>
      <section className="section">section3</section>
      <section className="section">section4</section>
    </div>
    </div>
  )
}

export default App