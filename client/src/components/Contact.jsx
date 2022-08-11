import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { deleteContact, getOneContact } from '../JS/actions/actions';
import { toggleTrue } from '../JS/actions/edit';
import { Link } from 'react-router-dom';


const Contact = ({contact}) => {
  const dispatch = useDispatch();
  return (
    <Card style={{margin:"10px"}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://thumbs.dreamstime.com/b/contact-us-icon-call-contact-us-contacts-email-message-white-background-contact-us-icon-call-contact-us-contacts-email-message-121745064.jpg'
        />
        <Card.Header>  {contact.name} </Card.Header>
        <Card.Meta> {contact.phone} </Card.Meta>
        <Card.Description>
          <strong> {contact.email} </strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/${contact._id}`} >
          <Button basic color='green' onClick={()=>{dispatch(getOneContact(contact._id));dispatch(toggleTrue())}} >
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>  )
}

export default Contact