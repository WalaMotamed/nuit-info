import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sauvetages.css'


function Sauvetages() {

    const [sauvetages,setSauvetages] = useState([])

    useEffect(()=>{
          axios.get('https://nuitinfoback.herokuapp.com/rescue?page=0&limit=5')
             .then(res => {
                 console.log("res.data",res.data)
                 setSauvetages(res.data.data)
                
                })
             .catch(err => console.error(err))

    },[])
    return (
        <div className="sauvetages">
            <div>
                {sauvetages.map(item => <div className="sauvetage-card">
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h3><b>Titre : </b> {item.title}</h3>
                    <h3>{item.date}</h3>
                    </div>
                  
                    <span><b>Bateau :</b> {item.boat.name}</span>
                    <p style={{marginTop:"2%"}}>{item.description}</p>
                    <span style={{float:'right'}}>{item.source}</span>
                    

                </div>)}
            </div>
        </div>
    )
}

export default Sauvetages
