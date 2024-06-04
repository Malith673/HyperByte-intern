import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestaurantCard = ({ id,name, address, phone, onUpdate }) => {

  const onDeleteResturant = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/api/resturants/${id}`)
      .then(response => {
        toast.success('Restaurant delete successfully!');
        console.log(response);
       
      })
      .catch(err => {
        toast.error('Failed to delete restaurants.');
        console.log(err);
      });
  };

  return (
    <div className="relative bg-yellow-300 p-4 rounded shadow-md mb-4">
      <div className="absolute top-2 right-2 space-x-2">
        <Link to={`/edit/${id}`}>
            <button 
                onClick={onUpdate} 
                className="px-2 py-1 bg-green-500 text-white rounded text-sm"
                >
                Update
            </button>
        </Link>
        <button 
          onClick={onDeleteResturant} 
          className="px-2 py-1 bg-red-500 text-white rounded text-sm"
        >
          Delete
        </button>
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{address}</p>
      <p>{phone}</p>
      <ToastContainer />
    </div>
  );
};

export default RestaurantCard;

