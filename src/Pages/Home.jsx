import { Button, Container, Form, InputGroup } from "react-bootstrap";  
import { Link} from "react-router-dom";
import { FaPlus, FaSearch ,FaTrashAlt } from "react-icons/fa";  
import { useContext } from "react";
import { ContextProvider } from "../Context/useContextApi";

const Home = () => {  
  const {notes,setNotes,search,setSearch,searchNotes} = useContext(ContextProvider);

  const filteredNotes = searchNotes();
  console.log(filteredNotes)

  const handleDelete = (id) => {
      const newNotes = notes.filter((note)=>note.id !== parseInt(id))
      setNotes(newNotes)
  }
  
  return (  
    <section>  
      <InputGroup>  
        <InputGroup.Text id="inputGroupPrepend">
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="search" 
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          aria-describedby="inputGroupPrepend"
        />  
        <Link to='/create'>
        <Button variant="primary">
          <FaPlus />
        </Button> 
        </Link>
          
      </InputGroup>
      <Container className="mt-5"> 
       <ul className="list gap-3 row">
        {filteredNotes?.map((note)=>(
          <li className="col cols-md-6" key={note.id}>          
              <div className="card">
                <div className="card-header"><h6 className="fw-bold">{note.title.length >=20? `${note.title.substring(0,21)}...`:note.title }</h6></div>
                  <div className="card-body"> 
                    <div className="card-text"><p>{note?.desc?.length >=30 ? `${note?.desc.substring(0,30)}...` : note?.desc }</p></div>               
                  <div className="card-footer d-flex align-items-center justify-content-between ">
                    <small>{note.date}</small>
                    <Link className="link btn btn-success" to={`/edit/${note.id}`}>Edit</Link>
                    <span onClick={()=>handleDelete(note.id)} className="text-danger btn "><FaTrashAlt/></span>
                  </div>
                </div>           
              </div>        
        
          </li>
        ))}
       </ul>
      </Container>  
    </section>  
  );  
}  

export default Home;
