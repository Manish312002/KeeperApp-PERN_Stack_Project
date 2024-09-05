import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useState } from 'react';
import { Zoom } from '@mui/material';


function NewNote(props){

    const [isExpand, setExpand] = useState(false)

    const handleExpand=(e)=>{
        setExpand(true)
    }

    return(
        <>
        <Zoom in={true}>
        <form onSubmit={props.handlenewsubmit}>
            {isExpand?<Zoom in={true}><input onChange={props.handlenewnote} name="title" type="text" placeholder='Title' value={props.title}/></Zoom>:null}
            <textarea onClick={handleExpand} onChange={props.handlenewnote} name="note" id="note" placeholder='Take a note...' value={props.note} rows={isExpand?3:1}></textarea>
            {isExpand?<Zoom in={true}><button  type="submit"><NoteAddIcon/></button></Zoom>:null}
        </form>
        </Zoom>
        </>
    )
}

export default NewNote