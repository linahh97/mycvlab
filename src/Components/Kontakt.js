import { Link } from "react-router-dom";
export default function Kontakt(){
    return(
      <>
      <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
          <li><Link to="/mycvlab">Hem</Link></li>
          <li>Kontakt</li>
          <li><Link to="/mycvlab/erfarenheter">Erfarenheter</Link></li>
          <li><Link to="/mycvlab/utbildningar">Utbildningar</Link></li>
          <li><Link to="/mycvlab/kompetenser">Kompetenser</Link></li>
          <li><Link to="/mycvlab/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <main>
      <div className="square">
            <div className="text">
            <div className="contact">
                <p>Adress: <span className="info"> Skånegatan 179 <br/> 432 39 Varberg</span></p>
                <p>Email: <a href="mailto:linah97@hotmail.com">linah97@hotmail.com</a></p>
                <p>Telefon: <span className="info">0735541231</span></p>
            </div>
          </div>
        </div>
      </main>
      </>
    )
  }