import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout/Layout'
import About from './Pages/About'
import EditPage from './Pages/EditPage'
import ErrorPage from './Pages/ErrorPage'
import CreateNote from './Pages/CreateNote'
import UseContextApi from './Context/useContextApi'

function App() {


  return (
   <div className="App">
    <UseContextApi>
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/edit/:id' element={<EditPage/>}/>
            <Route path='/create' element={<CreateNote/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </Router>
    </UseContextApi>
     
   </div>
  )
}

export default App
