import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/resturants/${id}`)
      .then(response => {
        const { name, address, telephone } = response.data;
        setName(name);
        setAddress(address);
        setTelephone(telephone);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/resturants/${id}`, {
      name,
      address,
      telephone
    })
      .then(response => {
        toast.success('Restaurant details updated successfully!');
        console.log(response);
       
      })
      .catch(err => {
        toast.error('Failed to update restaurant details.');
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Restaurant</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Telephone</label>
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded">Update</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditRestaurant;
