import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';

export const ContactContext = React.createContext();


function App() {

  const LOCAL_STORAGE_KEY = "saved";

  const [savedContacts, setSavedContacts] = useState([]);

  // retrieve the contacts from the localStorage
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setSavedContacts(retrieveContacts);
    }
  }, []);

  // save the contacts in localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedContacts));
  }, [savedContacts]);

  // function to get the saved contacts
  const getSavedContacts = (contactArray) => {
    setSavedContacts([...savedContacts, contactArray]);
  }

  // handle Contact Delete
  const handleDelete = (id) => {
    const newContacts = savedContacts.filter(remContacts => remContacts.id !== id);
    setSavedContacts(newContacts);
    console.log(newContacts);
  }

  return ( 
    <div className='App'>
      <ContactContext.Provider
        value={{
          getSavedContacts,
          savedContacts,
          handleDelete,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<ContactList/>}
          />
          <Route
            path='/add'
            element={<AddContact/>}
            // render={(props) => (<AddContact {...props} />)}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail/>}
          />

          {/* <AddContact />
          <ContactList /> */}
        </Routes>
      </ContactContext.Provider>
    </div>
   );
}

export default App;