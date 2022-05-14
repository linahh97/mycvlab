import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hem/>}/>
        <Route path="kontakt" element={<Kontakt/>}/>
        <Route path="erfarenheter" element={<Erfarenheter/>}/>
        <Route path="utbildningar" element={<Utbildningar/>}/>
        <Route path="kompetenser" element={<Kompetenser/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}
function Hem(){
  return(
    <>
    <nav>
      <ul className='my-list'>
        <li>Hem</li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/erfarenheter">Erfarenheter</Link></li>
        <li><Link to="/utbildningar">Utbildningar</Link></li>
        <li><Link to="/kompetenser">Kompetenser</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Välkommen till hemsidan!</h2>
      <p>Ba6eeeeeeeeee55</p>
    </main>
    </>
  )
}
function Kontakt(){
  return(
    <>
    <nav>
      <ul className='my-list'>
        <li><Link to="/">Hem</Link></li>
        <li>Kontakt</li>
        <li><Link to="/erfarenheter">Erfarenheter</Link></li>
        <li><Link to="/utbildningar">Utbildningar</Link></li>
        <li><Link to="/kompetenser">Kompetenser</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Kontaktuppgifter</h2>
      <p>Ba6eeeeeeeeee55</p>
    </main>
    </>
  )
}
function Erfarenheter(){
  return(
    <>
    <nav>
      <ul className='my-list'>
      <li><Link to="/">Hem</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li>Erfarenheter</li>
        <li><Link to="/utbildningar">Utbildningar</Link></li>
        <li><Link to="/kompetenser">Kompetenser</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Välkommen till erfarenheter!</h2>
      <p>Ba6eeee55</p>
    </main>
    </>
  )
}
function Utbildningar(){
  return(
    <>
    <nav>
      <ul className='my-list'>
      <li><Link to="/">Hem</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/erfarenheter">Erfarenheter</Link></li>
        <li>Utbildningar</li>
        <li><Link to="/kompetenser">Kompetenser</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Välkommen till utbildningar!</h2>
      <p>Ba6eeee55</p>
    </main>
    </>
  )
}
function Kompetenser(){
  return(
    <>
    <nav>
      <ul className='my-list'>
      <li><Link to="/">Hem</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/erfarenheter">Erfarenheter</Link></li>
        <li><Link to="/utbildningar">Utbildningar</Link></li>
        <li>Kompetenser</li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Välkommen till kompetenser!</h2>
      <p>Ba6eeee55a</p>
    </main>
    </>
  )
}
function Portfolio(){
  return(
    <>
    <nav>
      <ul className='my-list'>
      <li><Link to="/">Hem</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/erfarenheter">Erfarenheter</Link></li>
        <li><Link to="/utbildningar">Utbildningar</Link></li>
        <li><Link to="/kompetenser">Kompetenser</Link></li>
        <li>Portfolio</li>
      </ul>
    </nav>
    <main>
      <h2>Portfolio!</h2>
      <p>Ba6eeee55aaaa</p>
    </main>
    </>
  )
}
export default App;