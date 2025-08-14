import TaskCard from '../TaskCards/TaskCard'
import BinCard from '../../assets/bin.png'
import './task-section-column.css'

const TaskSection= ({title, tasks, status, icon})=>{
    return(
        <>
        <section className="section">
            <h2 className='task__section_column'> <img src={icon} alt='' className='task__section_column-icon' /> {title}
            </h2>
            {tasks.map((task, index) => task.status === status &&  <TaskCard key={index} icon={BinCard} title={task.task} tags={task.tags} /> )}
        </section>

        </>
    )
}

export default TaskSection