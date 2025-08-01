import './queue-assigned-tags.css'

const Tags= (props) =>{
    
  const {tagName} = props
    return(
        <>
            <button className="queue__assigned-tags">{tagName}</button>
        </>
    )
}

export default Tags