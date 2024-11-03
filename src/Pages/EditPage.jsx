import { useParams,useNavigate } from "react-router-dom"
import { ContextProvider } from "../Context/useContextApi"
import { useContext,useState } from "react"
import { dateInOrder } from "../assets/Sample"

const EditPage = () => {
  const {notes,setNotes} = useContext(ContextProvider);
  const {id} = useParams();
  const note = notes.find((item)=> item.id === parseInt(id))
  const date = dateInOrder();
  const navigate = useNavigate();
  const [title,setTitle]= useState(note.title)
  const [message,setMessage]= useState(note.desc)

  const handleEdit = (e) => {
    e.preventDefault()
    const editedNote = {...note,title,desc:message,date}
    if(title && message){
      const updatedNote = notes?.map((item)=> 
        item.id === parseInt(id) ? editedNote : item 
      )
      setNotes(updatedNote)
      navigate('/')
    }
  }

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to Delete this note?')){
      const newNotes = notes.filter((note)=>(
        note.id !== parseInt(id)
      ))
      setNotes(newNotes)
      navigate('/')
    }
  }

  
  return (
    <div className="mt-4">
       <form  onSubmit={handleEdit}>
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
         <div className="d-flex justify-content-between">
         <button type="submit"  className="btn  btn-primary">Add</button>
         </div>
      </form>
      <button onClick={handleDelete}  className="btn d-flex mt-2 btn-danger">Delete</button>
    </div>
  )
}

export default EditPage
