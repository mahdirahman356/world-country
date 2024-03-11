import { useState } from 'react';
import './Country.css'
const AllCountry = ({country,markVisit}) => {
    console.log(country)
    let {name,flags,coatOfArms,cca3,population,area} = country
    let [visited,setVisited] = useState(false)

    let hendelVisited =()=>{
        setVisited(!visited)
        markVisit(country)
    }
    return (
        <div className='AllCountry'>
             <h3>Name : {name.common}</h3>
             <img className='flag' src={flags.png} alt="" />
             <img className='arms' src={coatOfArms.png} alt="" />
             <h4>CCA3 : {cca3}</h4>
             <h4>Population : {population}</h4>
             <h4>Area : {area}</h4>
             <button onClick={hendelVisited}>{visited ? "Visited" : "Going"}</button>
             <p style={{ color : "#387ADF", fontWeight : "500"}}>{visited ? "I Have Visited This Country" : "I Want To Visit"}</p>
        </div>
    );
};

export default AllCountry;