import React from 'react'
import './header.css'
import main from '../../assets/1677133701513.jpg'



const header = () => {
  return (
    <header>

      <div className="container header__container">
        <h5>Welcome To</h5>
        <h1 data-aos="fade-up">Gayatri Tapobhoomi Mandir</h1>
        <h5 className="text-light">Gayatri Nagar, Tadas</h5>
        <div className="me">
          <img src={main} alt="" />
        </div>




      </div>

    </header>
  )
}

export default header
