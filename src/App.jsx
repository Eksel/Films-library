import { useState,useEffect,useRef } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/home.png'
import search from './images/search.png'
import Card from './components/Card'
import { useMemo } from 'react'
import Main from './components/Main'
import Film from './components/Film'

function App() {
  const [cards, setCards] = useState([])
  
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTI2MTlmMGE2ZTJhYTE4NTc2N2E5N2IyMzY4OTNhOCIsInN1YiI6IjY0NjRmYjRkNDRhNDI0MDE2NjU5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCR3ejWRtbQ13-kkFyIqjXmKrkhwWyheYdBa7RU-PxI'
    }
  };
  
  
 
  
  const fetchUserData = () => {
    fetch(url,options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        
        setCards(data.results)
        

      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  const get = () =>{
    console
    return cards[0]
  }
  function summary(a){
    return '/'+a
  }
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Main list={cards} />} />
          <Route path='/huj' element={<h1>siema</h1>}/>
          
          
              
                {cards.map(item => (
                  <Route key={item.id} path={summary(item.id)} element={<Film values={item}/>}  />
                  
                  
                  
                ))}
              
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
