import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RestaurantList from './home_page';
import CreateRestaurant from './create_resturant_page';
import EditRestaurant from './edit_resturant_page';
//import HomePage from './home_page';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        {/* <nav className="flex justify-between py-4">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/create" className="text-blue-600">Create Restaurant</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/create" element={<CreateRestaurant />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
