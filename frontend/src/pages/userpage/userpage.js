// import React from 'react'
// import './userpage.css';
// import Navbar from "../../components/navbar/navbar";
// import HospitalImage from "../../images/hospitalimg1.jpeg"


// function userpage() {
//   return (
//   <div className='userpage'>
//     <Navbar />
     
//     <button className='addcentre'>BOOK YOUR SLOT</button>

//     <div className='firstcenter'>
//       <img className='hospitalimage' src={HospitalImage} alt="hosimage"></img>
//       <div className='rightcontent'>
//       <h1>Hospital A</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <i class="fa-solid fa-location-dot">  Chennai,tamilnadu</i>
//       </div>
//     </div>

//     <div className='firstcenter'>
//       <img className='hospitalimage' src={HospitalImage} alt="hosimage"></img>
//       <div className='rightcontent'>
//       <h1>Hospital B</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <i class="fa-solid fa-location-dot">  Chennai,tamilnadu</i>
//       </div>
//     </div>

//     <div className='firstcenter'>
//       <img className='hospitalimage' src={HospitalImage} alt="hosimage"></img>
//       <div className='rightcontent'>
//       <h1>Hospital C</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <i class="fa-solid fa-location-dot">  Chennai,tamilnadu</i>
//       </div>
//     </div>

//     <div className='firstcenter'>
//       <img className='hospitalimage' src={HospitalImage} alt="hosimage"></img>
//       <div className='rightcontent'>
//       <h1>Hospital D</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <i class="fa-solid fa-location-dot">  Chennai,tamilnadu</i>
//       </div>
//     </div>

//     <div className='firstcenter'>
//       <img className='hospitalimage' src={HospitalImage} alt="hosimage"></img>
//       <div className='rightcontent'>
//       <h1>Hospital E</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
//         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
//         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
//         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <i class="fa-solid fa-location-dot">  Chennai,tamilnadu</i>
//       </div>
//     </div>

    
//   </div>
//   )
// }

// export default userpage



import React,{ useState, useEffect } from 'react'
import HospitalImage from "../../images/hospitalimg1.jpeg"
import axios from "axios";
import './userpage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar";

function Userpage() {

  const navigate = useNavigate();

  const [data,setData] = useState([]);
  useEffect (()=>{
    axios.get('http://localhost:8081/user')
    .then(res=>setData(res.data))
    .catch(err => console.log(err));
  })



  return (
    <div className='userpage'>
        <Navbar />
       
       <button className='addcentre' onClick = {() => navigate("/user/bookslot")}>BOOK YOUR SLOT</button>
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
  )
}

export default Userpage