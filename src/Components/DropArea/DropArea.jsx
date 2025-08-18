import { useState } from 'react'
import '../DropArea/DropArea.css'


const DropArea = ({onDrop}) =>{
    const [showDrop, setShowDrop] = useState(false)
    return <>
        <section className={showDrop ? 'drag-area' : 'hide-drop-area'} onDragEnter={()=>{setShowDrop(true)}} onDragLeave={()=>{setShowDrop(false)}} onDrop={()=>{onDrop();setShowDrop(false)}} onDragOver={e => e.preventDefault()}>
            Drop Area
        </section>
    </>
}


export default DropArea