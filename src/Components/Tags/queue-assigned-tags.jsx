import './queue-assigned-tags.css'

const Tags= (props) =>{
    
  const {tagName, selectedTag, selected } = props
  const tagStyle = {
    Dev:{backgroundColor: '#0BAEF4'},
    QA:{backgroundColor:'#F52727'},
    PO: {backgroundColor:'#20C809'}

  }
  const tagKeyMap= {
    'Dev':'Dev',
    'QA':'QA',
    'Product Owner':'PO'
  }
  const key =tagKeyMap[tagName]
    return(
        <>
            <button 
            style={selected ? tagStyle[key] : {}} type='button'className="queue__assigned-tags" onClick={()=>{selectedTag(tagName)}}>{tagName}</button>
        </>
    )
}

export default Tags