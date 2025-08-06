import { useState } from "react";
import Tags from "../Tags/queue-assigned-tags";
import "./tasks-queue.css";

const TaskQueue = (props) => {
  const [taskData, setTaskData] = useState(
    {
      task: '',
      status: ''
    }
  )
  console.log(taskData);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setTaskData((prev)=>{
      return(
         {...prev,[name]:value}
      )
    })

  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(taskData)
  }
  // const [input, setInput] = useState("")
  // const [value, setValue] = useState('');

  // const inputHandler= (e)=>{
  // setInput(e.target.value)
  // }
  // console.log(input)

  // const selectTask= (e) => {
  //   setValue(e.target.value)
  // }
  // console.log(value)

  return (
    <header className="app__header">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter Task Detail" onChange={handleChange} />
        <div className="queue">
          <div className="queue__assigned">
           <Tags tagName={"Dev"} />
           <Tags tagName= {"QA"} />
           <Tags tagName={"Product Owner"} />
          </div>
          <div className="queue__state">
            <select onChange={handleChange} name="status">
              <option value="Ready for development">
                Ready for development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for QA">Ready for QA</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" value="submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskQueue;
