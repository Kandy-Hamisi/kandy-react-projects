import React from 'react';
import './App.css';


export default function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
      'X-RapidAPI-Key': '8ca5b4ac9amsh16c2e94d866c2bbp103240jsnab580d52147e'
    }
  };
  
  fetch('https://airbnb13.p.rapidapi.com/autocomplete?query=paris', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (
    <div>App</div>
  )
}
