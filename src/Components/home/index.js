import React from 'react'
import './home.css'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/footer'

function Home() {
  return (
    <div className='whole'>
        <div>
            <Header/>
        </div>
        <div>
            <Body/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home
