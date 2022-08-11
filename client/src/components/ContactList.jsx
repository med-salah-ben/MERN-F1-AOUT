import React, {useEffect} from 'react';
import  {useDispatch , useSelector} from "react-redux";
import { getContacts } from '../JS/actions/actions';
import Contact from './Contact';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state=> state.contactReducer.contacts);
    const loadContacts = useSelector(state=> state.contactReducer.loadContacts);

    useEffect(()=>{
        dispatch(getContacts())
    //eslint-disable-next-line
    },[])
    console.log(contacts)
  return (
    <div style={{margin:"50px",display:"flex", flexWrap:"wrap"}}>
        {loadContacts ? (<h1>LOADING.......!!!!</h1>)
        :contacts.length === 0 ? (<h2>There is no data....</h2>):(
            contacts.map((el)=> <Contact key={el._id}  contact={el}/>)
        )}
    </div>
  )
}

export default ContactList