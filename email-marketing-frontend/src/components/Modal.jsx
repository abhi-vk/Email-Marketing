import React, { useState } from 'react';
import axios from '../axios';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [emailDetails, setEmailDetails] = useState({
    to: '',
    subject: '',
    body: '',
    delayInMinutes: 1,
  });

  const handleInputChange = (e) => {
    setEmailDetails({ ...emailDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/email', emailDetails);
      alert('Email scheduled successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('Error scheduling email:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Email Modal</button>

      {showModal && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Schedule Email</h2>
          <div>
            <label>To:</label>
            <input
              type="email"
              name="to"
              value={emailDetails.to}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={emailDetails.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={emailDetails.body}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Delay (in minutes):</label>
            <input
              type="number"
              name="delayInMinutes"
              value={emailDetails.delayInMinutes}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
