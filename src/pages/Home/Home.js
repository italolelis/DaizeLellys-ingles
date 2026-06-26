import React from 'react'

import Carrossel from '../../components/Carrossel/Carrossel'
import SobreMim from '../../components/SobreMim/SobreMim'
import Footer from '../../components/Footer/Footer'
import Motivacao from '../../components/Motivacao/Motivacao'
import PortuguesEstrangeiro from '../../components/PortuguesEstrangeiro/PortuguesEstrangeiro'

import { Youtube } from '../../components/Youtube/Youtube'
import WalktheTalk from '../../components/WalktheTalk/WalktheTalk'



const Home = () => {
  return (
    <div>
       
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <WalktheTalk></WalktheTalk>
        <PortuguesEstrangeiro></PortuguesEstrangeiro>
        {/* <Comentarios></Comentarios> */}
        {/*<Motivacao></Motivacao> */}
        <Youtube></Youtube>
        {/* <Ebook></Ebook> */}
        <Footer></Footer>
      
    </div>
  )
}

export default Home
