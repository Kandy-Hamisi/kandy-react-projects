import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContactContext } from '../App'
import ContactCard from './ContactCard';

const ContactList = () => {

    const contactListContext = useContext(ContactContext);
    const savedContacts = contactListContext.savedContacts;

  return (
    <div className='contact-list'>
        
        <ul className='my-contacts'>
            <h3>Saved Contacts</h3>
            {
                savedContacts.map(contact => {
                    return <ContactCard
                        fullname={contact.fullname}
                        email={contact.email}
                        key={contact.id}
                        id={contact.id}
                    />
                })
            }
        </ul>
        <div className="add-new">
            <Link to='/add'>
                <button type='button' className='save-btn'>Add New Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default ContactList