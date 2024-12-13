import React from "react";
import { useState } from "react";

function Login({handleLogin}) {
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(Email,Pass)
        setEmail("");
        setPass("");
    }
    const [Email,setEmail]=useState('');
    const [Pass,setPass]=useState('');
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-amber-500 mb-6">Login</h2>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} required type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 " placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input value={Pass} onChange={(e)=>{setPass(e.target.value)}} required type="password" id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition">Login</button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account? <a href="#" className="text-amber-500 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

