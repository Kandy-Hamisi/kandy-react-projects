import React from 'react'

// if the argument is an object then we must add curly brackets to the prop

const BirthdayList = ({friend}) => {
  return (
    <React.Fragment>
        
          {
              friend.map((person) => {
                console.log(person);
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
                    </article>
                  );
              })
          }        
    </React.Fragment>
  )
}

export default BirthdayList;