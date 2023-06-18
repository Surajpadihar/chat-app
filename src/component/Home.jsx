import React from 'react'
import Sidebar from '../comps/Sidebar'
import Chat from '../comps/Chat'
const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
          
          <Sidebar/>
          <Chat/>
      </div>
    </div>
  )
}

export default Home;

