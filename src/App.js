import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Footer from './Components/Footer';
import SearchResults from './Components/Search/SearchResults';
import Header from './Components/Header';
import PropertyDetails from './Components/Search/PropertyDetails';
import PostProperty from './Components/PostProperty';



const App = () => {
  return (
    <div className=' mx-auto bg-white '>
           <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/search-results' element={<SearchResults />} />
        <Route path='/PostProperty' element={<PostProperty />} />
        {/* <Route path="/property/:propertyId" element={<PropertyDetails />} /> */}
        {/* <Route path="/property/:id" element={PropertyDetails} /> */}
        <Route path="/property/:propertyId" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
