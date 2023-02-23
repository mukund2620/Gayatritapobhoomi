import React from 'react'
import './footer.css'

import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Gayatri Tapobhoomi Mandir</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Group</a></li>
        </ul>

        <div className="footer__socials">

            <a href="https://www.facebook.com/gayatritadas/"><BsFacebook/></a>
        </div>

        <div className="footer__copyright">
      <small> &copy; Mukundraj Irkal. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
