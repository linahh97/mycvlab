import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default function Utbildningar(){
    const [data, setData]= useState([]);
    const getData=() => {
        fetch('skola.json',{
            headers: {
                'Content-Type': './application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myjson){
            setData(myjson)
        })
    }
    useEffect(()=>{
        getData();
    },[])

    return(
      <>
      <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
        <li><Link to="/mycvlab">Hem</Link></li>
          <li><Link to="/mycvlab/kontakt">Kontakt</Link></li>
          <li><Link to="/mycvlab/erfarenheter">Erfarenheter</Link></li>
          <li>Utbildningar</li>
          <li><Link to="/mycvlab/kompetenser">Kompetenser</Link></li>
          <li><Link to="/mycvlab/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <main>
      <div className="square">
          <div className="experience">
        {
          data && data.length>0 && data.map((item)=>
          <div>
            <h3>{item.Skola}</h3>
                <p>{item.År}</p>
                <p>{item.Plats}</p>
          </div>)
        }
        </div>
        </div>
      </main>
      </>
    )
  }