import Tags from '../Tags/queue-assigned-tags'
import './TaskCard.css'

const TaskCard = (props) =>{
    return(
        <>
        <article className='taskCard_container'>
            <h4>This is sample text</h4>
            <div className='flex_container'>
                <div className='card_tags'>
            <Tags tagName={"Dev"}/>
            <Tags tagName={"QA"}/>
            </div>
            <div className='card_delete'>
                <img src={props.icon} className='card__bin'/>
            </div>
            </div>
        </article>
        </>
    )
}

export default TaskCard