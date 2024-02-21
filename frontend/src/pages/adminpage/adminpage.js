import React, { useState, useEffect } from 'react';
import HospitalImage from "../../images/hospitalimg1.jpeg"
import axios from "axios";
import './adminpage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar";

function Adminpage() {


  const navigate = useNavigate();

  const [data,setData] = useState([]);
  useEffect (()=>{
    axios.get('http://localhost:8081/admin')
    .then(res=>setData(res.data))
    .catch(err => console.log(err));
  })


  return (
    <div className='adminpage'>

      <Navbar />
       
      <button className='addcentre' onClick = {() => navigate("/admin/addcentres")}>ADD CENTRE</button>
      <h1 className='centertopic'>LIST OF CENTRES</h1>

      {data.map(d => (
      <ul key={d.id}>
      <div className='firstcenter'>
        <img className='hospitalimage' src={HospitalImage} alt="hosimage" />
        <div className='rightcontent'>
          <h1>{d.hospitalname}</h1>
          <p>{d.description}</p>
          <i className="fa-solid fa-location-dot">&nbsp; {d.location}</i>
          <i class="fa-solid fa-bed">&nbsp;&nbsp;&nbsp;{d.slots}</i>
        </div>
      </div>
      </ul>
      ))}



    </div>
  );
}

export default Adminpage;





