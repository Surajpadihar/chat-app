import React, { useEffect, useState } from 'react'
import Sidebar from '../comps/Sidebar'
import Chat from '../comps/Chat'

// import { useMediaQuery } from 'react-responsive';

 
//choose the screen size 


// create an event listener

 
const Home = () => {
  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [isMobile, setIsMobile] = useState(false);

  
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='home'>
      <div className='container'>
          
          <Sidebar isMobile={isMobile}/>
         
          <Chat/>
        

         
       
      </div>
    </div>
  )
}

export default Home;

