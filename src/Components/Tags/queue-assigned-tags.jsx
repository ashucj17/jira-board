import './queue-assigned-tags.css'
import {tagStyle, tagKeyMap} from '../../Constant/common'

const Tags= (props) =>{
    
  const {tagName, selectedTag, selected } = props
  const key =tagKeyMap[tagName]
    return(
        <>
            <button 
            style={selected ? tagStyle[key] : {}} type='button'className="queue__assigned-tags" onClick={()=>{selectedTag(tagName)}}>{tagName}</button>
        </>
    )
}

export default Tags