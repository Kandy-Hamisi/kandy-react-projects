import React from 'react'
import { useParams } from 'react-router-dom';

const ContactDetail = (props) => {
  const {user_id} = useParams();
  console.log(user_id);
    console.log(props);
  return (
    <div className='contact-info'>
        <p>Kandy</p>
        <p>email</p>
    </div>
  )
}

export default ContactDetail