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
      const respone = await axios.post(
        "https://dummyjson.com/auth/login",
        formData
      );
      setMsg(` You have been Login successfully ! ${respone.data.username} `);
      dispatch(login(respone.data));
      navigate("/");
    } catch (error) {
      setMsg("login Failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>username</label>
        <input
          name="username"
          onChange={handlechange}
          type="text"
          placeholder="Enter your username"
        />
        <label>password</label>
        <input
          name="password"
          onChange={handlechange}
          type="text"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
