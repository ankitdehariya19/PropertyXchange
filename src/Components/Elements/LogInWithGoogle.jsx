import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import firebase from 'firebase/app';
import 'firebase/auth';

const LogInWithGoogle = () => {
  const handleLogInWithGoogle = () => {
    // Initialize Firebase (Replace these config values with your Firebase config)
    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      // Add other Firebase config properties here
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Create a new Google provider instance
    const provider = new firebase.auth.GoogleAuthProvider();

    // Trigger the Google sign-in popup
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // You can access the user's information from the 'result' object
        console.log('Logged in user:', result.user);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Google sign-in error:', error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        type="button"
        onClick={handleLogInWithGoogle}
        className="bg-red-600 hover:bg-red-700 text-white rounded p-4 text-sm flex items-center justify-center gap-x-2 transition"
      >
        <FaGoogle size={20} />
        Log In with Google
      </button>
    </div>
  );
};

export default LogInWithGoogle;
