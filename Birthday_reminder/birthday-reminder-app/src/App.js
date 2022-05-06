import React, { useState } from 'react'
import './App.css';
import BirthdayList from './components/BirthdayList';
import friends from './data';
const App = () => {

  // lets use useState to work with the list
  // the initial value is an object
  const [friend, setFriend] = useState(friends);


  // function to handle the clearing of the entire list
  const handleClear = () => {
    setFriend([]);
  }

  const handleDisplay = () => {
    setTimeout(()=> {
      setFriend(friends);
    }, 2000);
  }

  return (
    <main>
      <section className='App'>
        <h3>{friend.length} Birthdays Today</h3>
        <BirthdayList friend={friend} />
        <button type='button' className='btn' onClick={handleClear}>
          clear All
        </button>
        <button type='button' className='btn' onClick={handleDisplay}>
          Re-Display Birthdays
        </button>
      </section>
    </main>
  )
}

export default App