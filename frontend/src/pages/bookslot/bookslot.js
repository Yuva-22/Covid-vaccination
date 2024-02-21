import React, { useState, useEffect } from 'react';
import './bookslot.css';
import Navbar from '../../components/navbar/navbar';

function BookSlot() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/user')
      .then(response => response.json())
      .then(data => setHospitals(data))
      .catch(error => console.error('Error fetching hospitals:', error));
  }, []);

  const bookSlot = async (id) => {
    try {
      const response = await fetch('http://localhost:8081/user/bookslot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to book slot');
      }
      console.log('Slot booked successfully');
      // Update the UI to reflect the booking
      // For example, you can remove the booked hospital from the list
      setHospitals(hospitals.filter(hospital => hospital.id !== id));
    } catch (error) {
      console.error('Error booking slot:', error);
    }
  };

  return (
    <div className='bookslot'>
      <Navbar />
      {/* <h1>List of Hospitals</h1> */}
      <div className="slotcontainer">
      
      {/* <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <div>
              <p>Hospital Name: {hospital.hospitalname}</p>
              <p>Available Slots: {hospital.slots}</p>
            </div>
            <button onClick={() => bookSlot(hospital.id)}>Book Slot</button>
          </li>
        ))}
      </ul> */}

<table>

  <thead>
    <tr>
      <th>Hospital Name</th>
      <th>Available Slots</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {hospitals.map(hospital => (
      <tr key={hospital.id}>
        <td>{hospital.hospitalname}</td>
        <td>{hospital.slots}</td>
        <td><button onClick={() => bookSlot(hospital.id)}>Book Slot</button></td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
    </div>
  );
}

export default BookSlot;

