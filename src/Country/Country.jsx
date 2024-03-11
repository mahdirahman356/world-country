import { useEffect } from "react";
import { useState } from "react";
import AllCountry from "./AllCountry";
import './Country.css'


const Country = () => {
     let [country,setCountry] = useState([])
     useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res => res.json())
       .then(data => setCountry(data))
     },[])
     
     let [mark,setMark] = useState([])
     let markVisit = (visiteMark) => {
        let newMark = [...mark,visiteMark]
        setMark(newMark)
     }
    return (
       <div>
            <div>
                <h3>Visite Count : {mark.length}</h3>
                <div style={{border : "1px solid rgb(203, 203, 203)", borderRadius : "10px"}}>
                <h3 style={{textAlign:"center"}}>Visited Country</h3>
                <div style={{ padding: "15px", display : "flex", justifyContent : "space-between", alignItems : "center",}}>
                  <div>
                  {
                  mark.map(co => <h3 key={co}>{co.name.common}</h3>)
                  }
                  </div>
                  <div>
                  {
                  mark.map(co => <h3 key={co}>{co.cca3}</h3>)
                  }
                  </div>
                <div>
                {
                   mark.map(co => <img style={{width : "80px", display: "block",marginTop : "10px"}} key={co} src={co.flags.png} alt="" />)
                  }
                </div>
                </div>
                </div>
            </div>
            <div className="countries">
            {
                country.map((coun,index)=> <AllCountry
                 key={index} 
                 country={coun}
                 markVisit = {markVisit}
                 ></AllCountry>)
                 
            }
            </div>
       </div>
    );
};

export default Country;