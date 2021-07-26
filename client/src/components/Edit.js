import React,{useState,useEffect} from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import {editContact,getContactById} from '../js/actions/contacts'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory, useParams} from "react-router-dom"

const Edit = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    //useHistory
    const history =useHistory()
    // UseParams 
    const {id} = useParams()
    //
    useEffect(() => {
      dispatch(getContactById(id))
    }, [id])
    /***********************************/
    //
    const oldContact = useSelector(state => state.contactReducer.oneContact)
    useEffect(() => { 
      setName(oldContact.name);
      setEmail(oldContact.email);
      setPhone(oldContact.phone);
    }, [oldContact])
    
    //console.log(oldContact)
    const size = 'large'
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(editContact(id,{name,email,phone}));
        setName('');
        setEmail('');
        setPhone('');
        history.push('/')
    }
return (
    
    <div>
      <Form size={size} key={size} onSubmit={handleSubmit}>
        <Form.Group widths="equal">
            <Form.Field
            label="name"
            control="input"
            value={name}
            placeholder="name"
            onChange={(e)=> setName(e.target.value)}
          />
            <Form.Field
            label="email"
            control="input"
            value={email}
            placeholder="email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <Form.Field
            label="phone"
            control="input"
            value={phone}
            placeholder="phone"
            onChange={(e)=> setPhone(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Divider hidden />
      </Form>
    </div>
  );
};

export default Edit;
