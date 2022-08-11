import { EDIT_CONTACT, GET_CONTACT_FAIL,GET_CONTACT_LOAD,GET_CONTACT_SUCCESS , GET_ONE_CONTACT} from "../constant/actionsTypes";
import axios from "axios";

export const getContacts= () => async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result = await axios.get('/api/contact');
        dispatch({type:GET_CONTACT_SUCCESS , payload : result.data.response})
        console.log(result)

    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL, payload:error})
    }
}

export const deleteContact = (id) => (dispatch) =>{
    axios.delete(`/api/contact/${id}`)
    .then(()=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

export const getOneContact = (id) => (dispatch) =>{
    axios.get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_ONE_CONTACT,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postContact = (user) => async(dispatch) =>{
    try {
         await axios.post('/api/contact/addContact',user);
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id,user) => async(dispatch) =>{
    try {
        const result = await axios.put(`/api/contact/${id}`,user);
        dispatch({type:EDIT_CONTACT,payload:result.data.response})
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}