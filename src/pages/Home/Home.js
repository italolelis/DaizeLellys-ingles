import React from 'react'

import Carrossel from '../../components/Carrossel/Carrossel'
import SobreMim from '../../components/SobreMim/SobreMim'
import Footer from '../../components/Footer/Footer'
import Motivacao from '../../components/Motivacao/Motivacao'
import Metodologia from '../../components/Metodologia/Metodologia'
import Comentarios from '../../components/Comentarios/Comentarios'
import { Youtube } from '../../components/Youtube/Youtube'
import Cursos from '../../components/Cursos/Cursos'



const Home = () => {
  return (
    <div>
       
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <Cursos></Cursos>
        <Metodologia></Metodologia>
        <Comentarios></Comentarios>
        <Motivacao></Motivacao>
        <Youtube></Youtube>
        {/* <Ebook></Ebook> */}
        <Footer></Footer>
      
    </div>
  )
}

export default Home
