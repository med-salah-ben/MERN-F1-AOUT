import {Link , Route , Routes} from "react-router-dom"
import { useDispatch } from "react-redux";
import { Button } from 'semantic-ui-react'

import ContactList from "./components/ContactList";
import Home from "./components/Home";
import { toggleFalse } from "./JS/actions/edit";
import Add from "./components/Add";


function App() {
  const dispatch = useDispatch()
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Link to='/'><Button primary style={{margin:"20px"}} >Home</Button></Link>
      <Link to='/contacts'><Button secondary style={{margin:"20px"}} >Contact List</Button></Link>
      <Link to="/add" ><Button positive onClick={()=>dispatch(toggleFalse())} style={{margin:"20px"}} >Add Contact</Button></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Add />} />

      </Routes>
    </div>
  );
}

export default App;
