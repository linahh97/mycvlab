import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default function Erfarenheter(){
    const [data, setData]= useState([]);
    const getData=() => {
        fetch('jobb.json',{
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
      <div className="App">
        <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
        <li><Link to="/mycvlab">Hem</Link></li>
          <li><Link to="/mycvlab/kontakt">Kontakt</Link></li>
          <li>Erfarenheter</li>
          <li><Link to="/mycvlab/utbildningar">Utbildningar</Link></li>
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
            <h3>{item.Arbete}</h3>
            <p>{item.År}</p>
                <p>{item.Företag}</p>
          </div>)
        }
        </div>
        </div>
      </main>
      </div>
    )
  }