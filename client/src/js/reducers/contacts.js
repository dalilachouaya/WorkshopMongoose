
import {GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD,GET_CONTACTS_FAIL,GET_ONE_CONTACT} from '../constants/constContacts'
const Initialstate = {
    loading:false,
    contacts:[],
    errors:null,
    oneContact:{name:'',email:'',phone:''} };

export const contactReducer = (state = Initialstate,{type,payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return  {...state,loading:true}
            
            case GET_CONTACTS_SUCCESS:
                return {...state,contacts:payload,loading:false}
                
            case GET_CONTACTS_FAIL:
                return {...state,errors:payload,loading:false}
            
            case GET_ONE_CONTACT:
                return {...state,oneContact:payload,loading:false}
            
        default: return state ;
            
    }
}
