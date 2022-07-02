import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { ContactContext } from '../App';
const AddContact = () => {

    const navigate = useNavigate();
    const AddContactContext = useContext(ContactContext);
    const getSavedContacts = AddContactContext.getSavedContacts;

    const [contacts, setContacts] = useState([]);
    const [addedContact, setAddedContact] = useState({
        email: "",
        fullname: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddedContact({...addedContact, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addedContact.fullname && addedContact.email) {
            const newContact = {...addedContact, id: uuid()};
            setContacts([...contacts, newContact]);
            console.log(newContact);
            getSavedContacts(newContact);

            // clear the form
            setAddedContact({
                email: "",
                fullname: ""
            })
            navigate("/");
        }
    }

  return (
    <div className='addcontact-section'>
        <div className="form-section">
            <form name="form" className="form" onSubmit={handleSubmit}>
                <h3>Add Contact</h3>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={addedContact.fullname}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={addedContact.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className='save-btn'>Save Contact</button>
                </div>
            </form>
        </div>
            <div className="back">
                <Link to='/'>
                    <button type='button' className='save-btn'>View Contact List</button>
                </Link>
            </div>
    </div>
  )
}

export default AddContact