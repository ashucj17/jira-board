import './task-section-column.css'

const TaskSection= (props)=>{
    return(
        <>
        <section className="section">
            <h2 className='task__section_column'> <img src={props.icon} alt='' className='task__section_column-icon' /> {props.title}
            </h2>
        </section>

        </>
    )
}

export default TaskSection