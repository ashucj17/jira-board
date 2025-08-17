import Tags from '../Tags/queue-assigned-tags'
import './TaskCard.css'

const TaskCard = ({title, tags, icon, handleDelete, index, setActiveCard }) =>{
    return(
        <>
        <article className='taskCard_container' draggable onDragStart={() =>{setActiveCard(index)}} onDragEnd={()=>{setActiveCard(null)}}>
            <h4>{title}</h4>
            <div className='flex_container'>
                <div className='card_tags'>
                {tags.map((tag,index )=>
                (<Tags key={index} tagName={tag} selected/>))}
            </div>
            <div className='card_delete'>
                <img src={icon} className='card__bin' onClick={() =>{handleDelete(index)}}/>
            </div>
            </div>
        </article>
        </>
    )
}

export default TaskCard