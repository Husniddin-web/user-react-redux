import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { users } from "../../../user-list"; // Your array with name, password, permissions

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both name and password",
      });
      return;
    }

    const matchedUser = users.find(
      (user) => user.name === name && user.password === password
    );

    if (!matchedUser) {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Name or password is incorrect.",
      });
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome, ${matchedUser.name}!`,
    }).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
