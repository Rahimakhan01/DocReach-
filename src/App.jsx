import React from 'react';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-4xl font-bold text-center">Welcome to DocReach</h1>
        <p className="text-center text-xl mt-4">
          We provide emergency consultations when you cannot access a doctor physically.
        </p>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
