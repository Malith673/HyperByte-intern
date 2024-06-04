import React, { useState, useEffect } from 'react';
import NavigationBar from './components/navigation_bar';
import RestaurantCard from './components/resturant_card';
import axios from 'axios';


const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/resturants')
    .then(response=>setRestaurants(response.data))
    .catch(err=>console.log(err))
  },[])


  
  

  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto p-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard 
            id={restaurant._id}
            key={index}
            name={restaurant.name}
            address={restaurant.address}
            phone={restaurant.telephone}
            
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
