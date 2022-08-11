import React, {useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editContact,postContact } from '../JS/actions/actions';


const Add = () => {
    const dispatch = useDispatch()
    const [user,setUser] = useState({name:"",email:"",phone:""})
    const userReducer = useSelector(state=> state.contactReducer.user)
    const edit = useSelector(state=>state.editReducer.edit)

    useEffect(()=>{
        edit? setUser(userReducer) :setUser({name:"",email:"",phone:""})
    },[userReducer,edit])

    const handleContact = () =>{
        if(!edit){
            dispatch(postContact(user))
        }else{
            dispatch(editContact(userReducer._id,user))
        }
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setUser({...user,[e.target.name] : e.target.value})
    }

  return (
    <Form style={{margin:"100px 200px"}} >
    <Form.Field>
      <label>Full Name</label>
      <input placeholder='Full Name' type="text"   value={user.name} name="name" onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type="text" value={user.email} name="email" onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input placeholder='Phone' type="text" value={user.phone} name="phone" onChange={handleChange} />
    </Form.Field>
    <Button onClick={handleContact}><Link to="/contacts"> {edit? "Edit" : "Save"} </Link></Button>
  </Form>
  )
}

export default Add