import React, { useContext } from 'react'
import { ContactContext } from '../App'
import { Link } from 'react-router-dom';
const ContactCard = (props) => {
    const { fullname, email, id } = props;
    const contactCardContext = useContext(ContactContext);
    const handleDelete = contactCardContext.handleDelete;
    const displayId = () => {
        console.log(id);
    }
  return (
    <div className='contact-card'>
        <Link
            to={{
                pathname:`contact/${id}`,
                state:{contact: props}
            }}
        >
            <div className="details-container">
                <h4>{fullname}</h4>
                <h5>{email}</h5>
            </div>
        </Link>
        <div className="contact-handlers">
            <span className='edit' onClick={displayId}>Edit</span>
            <span className='delete' onClick={()=> handleDelete(id)}>Delete</span>
        </div>
    </div>
  )
}

export default ContactCard