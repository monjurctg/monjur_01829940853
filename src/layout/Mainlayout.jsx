import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function Mainlayout({children}) {
  return (
    <div style={{width:"100%"}}>

        <Header/>
        <div className='container' style={{marginTop:"100px"}}>
        {children}
        </div>
      
        <Footer/>
    </div>
  )
}

export default Mainlayout