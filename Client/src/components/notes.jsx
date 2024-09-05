
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Zoom } from '@mui/material';

function Notes({notes, handleDeleteNote}){
    return(
        <>
            {notes.map((note)=>{
                return(<Zoom in={true} key={note.id}>
                    <div className="note" id={note.id} >
                            <h1>{note.title}</h1>
                            <p>{note.note}</p>
                            <IconButton onClick={()=>handleDeleteNote(note.id)} aria-label="delete">
                               <DeleteIcon />
                            </IconButton>
                        </div>
                </Zoom>)})
            } 
        </>
    )
}

export default Notes