import { useState } from "react";
import Tags from "../Tags/queue-assigned-tags";
import "./tasks-queue.css";

const TaskQueue = ({setTasks}) => {
  const [taskData, setTaskData] = useState(
    {
      task: '',
      status: 'Ready For Development',
      tags:[],
    }
  )
  console.log(taskData);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setTaskData((prev)=>{
      return {...prev,[name]:value}
      
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTasks((prev)=>{
      return [...prev, taskData]
    })
    setTaskData({
      task: '',
      status: 'Ready For Development',
      tags:[],
    })
  }

  const selectedTag = (tag) => {
    setTaskData((prev)=>{
      const isSelected = prev.tags.includes(tag);
      const tags  = isSelected ? prev.tags.filter(item => item!=tag) : [...prev.tags,tag]

      return {...prev, tags}
    })
    // if(taskData.tags.some((item) => item === tag)){
    //   const filterTags = taskData.tags.filter(item => item!=tag)
    //   setTaskData(prev=>{
    //     return {...prev, tags:filterTags}
    //   })
    // }else{
    //   setTaskData(prev=>{
    //     return{...prev, tags:[...prev.tags,tag]}
    //   })
    // }
    
  }
  console.log(taskData)

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag)

  }

  return (
    <header className="app__header">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={taskData.task} placeholder="Enter Task Detail" onChange={handleChange} />
        <div className="queue">
          <div className="queue__assigned">
          <Tags tagName={"Dev"} selectedTag={selectedTag} selected={checkTag('Dev')} />
           <Tags tagName= {"QA"} selectedTag={selectedTag} selected={checkTag('QA')}/>
           <Tags tagName={"Product Owner"} selectedTag={selectedTag} selected={checkTag('Product Owner')}/>
          </div>
          <div className="queue__state">
            <select onChange={handleChange} name="status" value={taskData.status}>
              <option value="Ready For Development">
                Ready For Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready For QA">Ready For QA</option>
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
