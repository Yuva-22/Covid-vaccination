import React, { useState } from 'react';
import './addcentres.css';
import axios from 'axios';

function Addcentre() {
  const [hospitalName, setHospitalName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/admin/addcentres', {
        hospitalname: hospitalName,
        description: description,
        location: location,
        slots: 10 // Assuming slots will always be 10
      });

      

      setSuccessMessage(response.data.message);
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className='addcentres'>
      <div className='centerbox'>
        <form onSubmit={handleSubmit}>
          <h1 className='loginheading'>ADD CENTRE</h1>
          <label>HOSPITAL NAME</label>
          <br />
          <input
            type="text"
            placeholder="Enter Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            required
          />
          <br />
          <label>DESCRIPTION</label>
          <br />
          <textarea
            placeholder="&nbsp;&nbsp;Enter Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <br />
          <label>LOCATION</label>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <br />
          <button type="submit" className='addbtn'>ADD CENTER</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default Addcentre;
