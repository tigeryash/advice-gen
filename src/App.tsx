import './App.css'
import { useQuery, } from '@tanstack/react-query'
import axios  from 'axios'
import dice from './images/icon-dice.svg'
import patternMobile from './images/pattern-divider-mobile.svg'
import patternDesktop from './images/pattern-divider-desktop.svg'
import { useState, useEffect } from 'react'


function fetchAdvice() {
  return axios
    .get('https://api.adviceslip.com/advice')
    .then(res => res.data)
}

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const { data, error, status, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: fetchAdvice,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth) 
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])
  
  if(status === 'pending') return <p>Loading...</p>
  if(status === 'error') return <p>{JSON.stringify(error)}</p>


  let pattern
  if(screenWidth < 500){
    pattern = patternMobile
  }else{
    pattern = patternDesktop
  }

  return (
    <main>
      <h1>Advice #{data.slip.id}</h1>
      <p>"{data.slip.advice}"</p>
      <img className='pattern' src={pattern} />
      <button onClick={() => refetch()}>
        <img src={dice} />
      </button>
    </main>
    
  )
}

export default App
