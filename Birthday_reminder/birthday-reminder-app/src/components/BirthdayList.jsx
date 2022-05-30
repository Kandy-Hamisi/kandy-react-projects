import React from 'react'

// if the argument is an object then we must add curly brackets to the prop
const handleDelete = () => {

}

const BirthdayList = ({friend}) => {
  return (
    <React.Fragment>
        
          {
              friend.map((person) => {
                
                const {id, name, age, image} = person;
                  return (
                    <article key={id} className="friend-container">
                      <div className="person-img">
                        <img src={image} alt="person profile" />
                      </div>
                      <div className="person-info">
                        <h4 className='person-name'>{name}</h4>
                        <p className='person-age'>{age}</p>
                      </div>
                      <div className="delete-btn">
                         <button type='button' onClick={handleDelete}>Delete</button>
                      </div>
                    </article>
                  );
              })
          }        
    </React.Fragment>
  )
}

export default BirthdayList;