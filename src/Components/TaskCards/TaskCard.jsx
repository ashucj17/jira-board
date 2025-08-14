import Tags from '../Tags/queue-assigned-tags'
import './TaskCard.css'

const TaskCard = ({title, tags, icon }) =>{
    return(
        <>
        <article className='taskCard_container'>
            <h4>{title}</h4>
            <div className='flex_container'>
                <div className='card_tags'>
                {tags.map((tag,index )=>
                (<Tags key={index} tagName={tag}/>))}
            </div>
            <div className='card_delete'>
                <img src={icon} className='card__bin'/>
            </div>
            </div>
        </article>
        </>
    )
}

export default TaskCard