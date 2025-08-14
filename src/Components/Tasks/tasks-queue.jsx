import { useState } from "react";
import Tags from "../Tags/queue-assigned-tags";
import "./tasks-queue.css";

const TaskQueue = (props) => {
  const [taskData, setTaskData] = useState(
    {
      task: '',
      status: 'Ready for development',
      tags:[],
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

  const selectedTag = (tag) => {
    if(taskData.tags.some((item) => item === tag)){
      const filterTags = taskData.tags.filter(item => item!=tag)
      setTaskData(prev=>{
        return {...prev, tags:filterTags}
      })
    }else{
      setTaskData(prev=>{
        return{...prev, tags:[...prev.tags,tag]}
      })
    }
    
  }
  console.log(taskData)

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag)

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
          <Tags tagName={"Dev"} selectedTag={selectedTag} selected={checkTag('Dev')} />
           <Tags tagName= {"QA"} selectedTag={selectedTag} selected={checkTag('QA')}/>
           <Tags tagName={"Product Owner"} selectedTag={selectedTag} selected={checkTag('Product Owner')}/>
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
