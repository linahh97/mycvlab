import {Link} from 'react-router-dom';
 export default function Kompetenser(){
    return(
      <>
      <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
        <li><Link to="/mycvlab">Hem</Link></li>
          <li><Link to="/mycvlab/kontakt">Kontakt</Link></li>
          <li><Link to="/mycvlab/erfarenheter">Erfarenheter</Link></li>
          <li><Link to="/mycvlab/utbildningar">Utbildningar</Link></li>
          <li>Kompetenser</li>
          <li><Link to="/mycvlab/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <main>
      <div className="square">
            <div className="competence">
                <div className="feat">
                    <h3>Språk</h3>
                    <p>Svenska <span className="lang"> Flytande</span>
                    <br/>Engelska<span className="lang"> Flytande</span>
                    <br/>Arabiska<span className="lang"> Goda kunskaper</span> <br/>Spanska<span className="lang"> Grundläggande</span>
                    <br/>Franska<span className="lang"> Grundläggande</span>
                    </p>
                    </div>
                <div className="feat">
                    <h3>Datorkunskaper</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa deleniti unde nesciunt molestias!</p>
                    </div>
                <div className="feat">
                    <h3>Egenskaper</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum temporibus molestias vero laboriosam ea corrupti?</p>
                </div>
            </div>
        </div>
      </main>
      </>
    )
  }