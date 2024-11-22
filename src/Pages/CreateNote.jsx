import { useState } from "react"
import { useContext } from "react";
import { ContextProvider } from "../Context/useContextApi";
import { dateInOrder } from "../assets/Sample";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const {notes,setNotes} = useContext(ContextProvider)
    const navigate = useNavigate();
      const date =  dateInOrder();

    const addNote = (e) => {
       e.preventDefault();
       const newNote = {id:notes.length + 1,title,desc:message,date }
       setNotes([newNote,...notes])
       setMessage("")
       setTitle("")
       navigate('/')
    }
  
  return (
    <div>
      <form onSubmit={addNote}>
        <input 
        type="text"
        placeholder="Title..."
        className="border-o outline-0 form-control"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required
        />
        <textarea
         cols="53" 
         placeholder="message..." 
         className="border-0"
         value={message}
         onChange={(e)=>setMessage(e.target.value)}
         rows="15"></textarea>
         <button type="submit"  className="btn  btn-primary">Add</button>
      </form>
    </div>
  )
}

export default CreateNote
