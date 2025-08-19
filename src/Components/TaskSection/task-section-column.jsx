import React from 'react'
import TaskCard from '../TaskCards/TaskCard'
import BinCard from '../../assets/bin.png'
import './task-section-column.css'
import DropArea from '../DropArea/DropArea'

const TaskSection= ({title, tasks, status, icon, handleDelete, setActiveCard, onDrop})=>{
    return(
        <>
        <section className="section">
        
            <h2 className='task__section_column'> <img src={icon} alt='' className='task__section_column-icon' /> {title}
            </h2>
<<<<<<< HEAD
            <DropArea  onDrop={()=>{onDrop(status, 0)}} />
=======
            <DropArea  />
>>>>>>> 8b512378dd474c60d2de1324dcb02d5f9b2ab9fb
            {tasks.map((task, index) => task.status === status &&  (
                <React.Fragment key={index}>
                <TaskCard key={index} icon={BinCard} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} setActiveCard={setActiveCard} />
                  <DropArea onDrop={()=>{onDrop(status, index+1)}} />
                </React.Fragment>
                )
            )}
        </section>
      
        </>
    )
}

export default TaskSection