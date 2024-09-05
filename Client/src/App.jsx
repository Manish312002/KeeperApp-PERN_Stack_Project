import { useEffect, useState } from 'react'
import axios from "axios"
import Header from './components/header'
import Footer from './components/footer'
import Notes from './components/notes'
import NewNote from './components/form'
import './App.css'

function App() {
  const [notes, setnotes] = useState([])
  const [note, setnote] = useState({
    title:"",
    note:""
  })

  console.log(notes)

  useEffect(() => {
    axios.get("http://localhost:3000/")
    .then(response => setnotes(response.data))
    .catch(error => console.error("Error fetching data",error))
  },[])

  console.log("Current Notes :",notes)
  console.log("Current Note:",note)
  

  const handlenote =(e)=>{
    const {name, value} = e.target;
    setnote(prevValue =>({
      ...prevValue,
      [name]:value
    }))
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/todo_new",{
    title:note.title,
    note:note.note
    })
    .then(response => setnotes(prevValue =>[...prevValue, response.data]),setnote({title:"", note:""}))
    .catch(error => console.error("Error Creating Note",error))
    
    
  }

  const handledelete =(id)=>{
    console.log(id)
    axios.delete(`http://localhost:3000/todo_delete/${id}`)
    .then(response =>setnotes(notes.filter((note) =>note.id != id)))
    .catch(error => console.error("Error Deleting Note",error))
   
  }

  return (
    <>
      <Header />

      <NewNote 
        handlenewnote={handlenote}
        handlenewsubmit={handlesubmit}
        title={note.title}
        note={note.note}
      />

      <Notes 
      notes={notes}
      handleDeleteNote={handledelete}
      />

      <Footer />
    </>
  )
}

export default App
