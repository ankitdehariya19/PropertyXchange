import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Footer from './Components/Footer';
import SearchResults from './Components/Search/SearchResults';
import Header from './Components/Header';



const App = () => {
  return (
    <div className=' mx-auto bg-white '>
           <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/search-results' element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
