import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Hem from './Components/Hem';
import Kontakt from './Components/Kontakt';
import Erfarenheter from './Components/Erfarenheter';
import Utbildningar from './Components/Utbildningar';
import Kompetenser from './Components/Kompetenser';
import Portfolio from './Components/Portfolio';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mycvlab/hem" element={<Hem/>}/>
        <Route path="/mycvlab/kontakt" element={<Kontakt/>}/>
        <Route path="/mycvlab/erfarenheter" element={<Erfarenheter/>}/>
        <Route path="/mycvlab/utbildningar" element={<Utbildningar/>}/>
        <Route path="/mycvlab/kompetenser" element={<Kompetenser/>}/>
        <Route path="/mycvlab/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}
export default App;