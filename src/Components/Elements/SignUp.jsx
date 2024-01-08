import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here, e.g., API calls, authentication, etc.
    console.log('Submitted with:', name, email, password);
  };

  const handleSignUpWithGoogle = () => {
    // Handle the "Sign Up with Google" logic here
    console.log('Sign Up with Google clicked');
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-8 w-96 flex flex-col gap-y-4 -mt-48">
        <h1 className="font-bold text-2xl mb-6">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4  h-14 text-sm  text-gray-400"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4  h-14 text-sm  text-gray-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4  h-14 text-sm  text-gray-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handleSignUpWithGoogle}
          className="bg-red-600 hover:bg-red-700 text-white rounded p-4 text-sm w-full mt-4 flex items-center justify-center gap-x-2 transition"
        >
          <FaGoogle size={20} />
          Sign Up with Google
        </button>

        <div className="text-center mt-4">
          {/* Use the Link component instead of the anchor tag */}
          <Link to="/login" className="text-blue-500 font-semibold">Already have an account? Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
