import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Portfolio()
{
    const [name, setName] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/linahh97/repos')
        .then(res => res.json())
        .then(data => {
            setName((prevname)=>[
                ...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name,
                    description: data[3].description,
                    html_url: data[3].html_url
                },
                {
                    name: data[4].name,
                    description: data[4].description,
                    html_url: data[4].html_url
                }
            ])
        })
    },[])

    return(
      <div className='App'>
        <h1 class="line"></h1>
      <h1 className="name">Lina Hourani</h1>
      <nav>
        <ul className='my-list'>
        <li><Link to="/mycvlab">Hem</Link></li>
          <li><Link to="/mycvlab/kontakt">Kontakt</Link></li>
          <li><Link to="/mycvlab/erfarenheter">Erfarenheter</Link></li>
          <li><Link to="/mycvlab/utbildningar">Utbildningar</Link></li>
          <li><Link to="/mycvlab/kompetenser">Kompetenser</Link></li>
          <li>Portfolio</li>
        </ul>
      </nav>
        <main>
            <div className='square'>
                <div className='text'>
            <h2>Mina github projekt:</h2>
            {name.map((names)=>(
                <>
                <h3>{names.name}</h3>
                <p>{names.description}</p>
                <p><a href={names.html_url}>{names.html_url}</a></p>
                </>
            ))
            }
            </div>
            </div>
        </main>
      </div>
    )
  }