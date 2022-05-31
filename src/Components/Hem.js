import { Link } from "react-router-dom";
export default function Hem(){
    return(
      <>
      <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
          <li>Hem</li>
          <li><Link to="/mycvlab/kontakt">Kontakt</Link></li>
          <li><Link to="/mycvlab/erfarenheter">Erfarenheter</Link></li>
          <li><Link to="/mycvlab/utbildningar">Utbildningar</Link></li>
          <li><Link to="/mycvlab/kompetenser">Kompetenser</Link></li>
          <li><Link to="/mycvlab/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <main>
      <div className="square">
            <div className="text">
              <h2>Välkommen till min hemsida!</h2>
            <p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quia reiciendis facilis, odio ut esse at soluta ipsa et eum possimus ex vitae labore distinctio ipsam suscipit pariatur saepe provident.</p>
            </div>
        </div>
      </main>
      </>
    )
  }