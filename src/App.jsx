import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/home.png'
import search from './images/search.png'
import Card from './components/Card'
import { useMemo } from 'react'


function App() {
  const [cards, setCards] = useState([])
  const [query, setQuery] = useState("");
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTI2MTlmMGE2ZTJhYTE4NTc2N2E5N2IyMzY4OTNhOCIsInN1YiI6IjY0NjRmYjRkNDRhNDI0MDE2NjU5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCR3ejWRtbQ13-kkFyIqjXmKrkhwWyheYdBa7RU-PxI'
    }
  };
  const filteredItems = useMemo(()=>{
    return cards.filter(
      (item)=>item.title.toLowerCase().includes(query.toLowerCase())
    )
  },[query,cards]);
  
 
  
  const fetchUserData = () => {
    fetch(url,options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setCards(data.results)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <>
      <header className='navbar'>
        <div className="home">
          <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>

          </a>
        </div>
        <div className='search'>
          <svg  onClick={focusInput} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input ref={inputElement}  value={query} onChange={e => setQuery(e.target.value)}   type="text" />
          
        </div>
        <h1 >Films Library</h1>
      </header>
      <article className='conteiner'>
      {cards.length > 0 && (
        <div className="card-container">
          {filteredItems.map(item => (
            <Card key={item.id} {...item}/>
          ))}
        </div>
      )}
      </article>
    </>
  )
}

export default App
