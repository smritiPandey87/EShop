import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        formData
      );
      setMsg(`You have been logged in successfully! ${response.data.username}`);
      dispatch(login(response.data));
      navigate("/");
    } catch (error) {
      setMsg("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Username</label>
            <input
              name="username"
              onChange={handlechange}
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              name="password"
              onChange={handlechange}
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-300 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        {msg && (
          <p className="text-center text-gray-700 mt-4 font-semibold">{msg}</p>
        )}
      </div>
    </div>
  );
}
