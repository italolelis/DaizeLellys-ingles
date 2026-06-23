import React from 'react'
import './Carrossel.css'
import Header from '../Header/Header'
import DaizeLellys from './Img/banner.jpeg'


import { IoLogoWhatsapp } from "react-icons/io";


const Carrossel = () => {

  
  return (
    <div>
    <Header></Header>
  <div className='template' id='home'>
         
  <div className="div-geral-carrossel">
      <img src={DaizeLellys} alt='Banner Daize Lellys' className="img-desktop" />
  </div>

      
    </div>

          <div id='btn-flutuante'>
            <a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'><IoLogoWhatsapp color='green'/></a>
           </div>
    </div>
 
)}


export default Carrossel
