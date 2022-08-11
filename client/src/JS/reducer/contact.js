import { EDIT_CONTACT, GET_CONTACT_FAIL , GET_CONTACT_LOAD ,GET_CONTACT_SUCCESS, GET_ONE_CONTACT } from "../constant/actionsTypes"

const initialState = {
    contacts:[],
    loadContacts:false,
    user:{},
    editContact: "" ,
    errors:[]
}


export const contactReducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case GET_CONTACT_LOAD:
            return {...state,loadContacts:true}
        case GET_CONTACT_SUCCESS:
            return {...state,loadContacts:false,contacts:payload}
        case GET_CONTACT_FAIL:
            return {...state,loadContacts:false,errors:payload}
        case GET_ONE_CONTACT:
            return {...state,user:payload}
        case EDIT_CONTACT:
            return {...state, editContact:payload}
        default:
            return state;
    }
}