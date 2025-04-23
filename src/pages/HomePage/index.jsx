import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-6">
          Click below to login and access the dashboard.
        </p>
        <button
          onClick={handleLoginClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
