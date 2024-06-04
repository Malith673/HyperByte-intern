import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const CreateRestaurant = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, telephone });
    axios.post('http://localhost:3000/api/resturants', {
      name,
      address,
      telephone
    })
      .then(response => {
        toast.success('Restaurant created successfully!');
        console.log(response);
        
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Contact number invalid format');
        }
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center">Create Restaurant</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Restaurant Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Restaurant Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Restaurant Telephone</label>
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded">Create</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateRestaurant;
