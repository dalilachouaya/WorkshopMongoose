import React from "react"
import {useDispatch} from "react-redux"
import { Button, Card, Image } from "semantic-ui-react"
import {deleteContact,getContactById} from '../js/actions/contacts'
import {Link} from 'react-router-dom'
const Contact = ({ el }) => {
    const dispatch = useDispatch()
    
  return (
    <div>
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src="data:image/png;base64,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" />
          <Card.Header>{el.name}</Card.Header>
          <Card.Meta>{el.email}</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details{'...'}
            {el.phone}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
          <Link to ={`/edit/${el._id}`}>
            <Button basic color="green" onClick={()=> dispatch(getContactById(el._id))}>
              EDIT
            </Button>
            </Link> 
            <Button basic color="red" onClick={()=> dispatch(deleteContact(el._id))}>
              REMOVE
            </Button>

          </div>
        </Card.Content>
      </Card>
    </div>
  )
};

export default Contact;