import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Footer from './Components/Footer';
import PropertyDetails from './page/PropertyDetails';
import Header from './Components/Header';
import SignUp from './Components/Elements/SignUp';
import LogIn from './Components/Elements/LogIn';
import ForgotPassword from './Components/Elements/ForgotPassword';
import PropertyTypePage from './Components/PropertyTypePage';
import BookMyStay from './Components/BookMyStay';

const App = () => {
  return (
    <div className=' mx-auto bg-white '>
           <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/:type/*' element={<PropertyTypePage />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
