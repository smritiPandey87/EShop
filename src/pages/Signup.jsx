import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const response = await axios.post("https://dummyjson.com/users/add", formData);
      setMsg(`User created successfully! ID: ${response.data.id}`);
    } catch (error) {
      setMsg("Signup failed. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              required
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Create Password</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              required
              placeholder="Enter password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Confirm Password</label>
            <input
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              required
              placeholder="Confirm password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-400 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        {msg && <p className="text-center text-gray-700 mt-4 font-semibold">{msg}</p>}
        <button className="w-full mt-4 text-blue-600 hover:underline text-center">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
