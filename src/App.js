import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js';
import WalkTheTalk from './pages/WalkTheTalk/WalkTheTalk.js';
import PortuguesPEstrangeiros from './pages/PortuguesPEstrangeiros/PortuguesPEstrangeiros.js';
import { Routes, Route} from 'react-router-dom';
import Valores from './pages/Valores/Valores.js';



function App() {
  return (
  
    
     <div>
      
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
     <Route path='/valores' element={<Valores/>}></Route>
     <Route path='/walk-the-talk' element={<WalkTheTalk/>}></Route>
     <Route path='/portugues-estrangeiros' element={<PortuguesPEstrangeiros/>}></Route>

    

      
    </Routes>
     
     </div>
         
  
  );
}

export default App;
