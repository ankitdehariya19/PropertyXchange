import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './common/Footer';
import SearchResults from './pages/SearchResults';
import Header from './common/Header';
import PropertyDetails from './pages/PropertyDetails';
import PostProperty from './pages/PostProperty';

const App = () => {
  return (
    <Router>
      <div className='mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-results' element={<SearchResults />} />
          <Route path='/PostProperty' element={<PostProperty />} />
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
