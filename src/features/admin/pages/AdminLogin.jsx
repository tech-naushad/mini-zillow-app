import React, { useRef, useState } from "react";
import apiClient from "../../../api/apiClient";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const apiBaseUrl = import.meta.env.VITE_AUTH_SERVICE_BASE_URL;
import { useLoader } from "../../../components/pageLoader/LoaderContext";
import MZPasswordControl from "../../../components/input/MZPasswordControl";
import MZButton from "../../../components/button/MZButton";
import MZInputControl from "../../../components/input/MZInputControl";


const AdminLogin = () => {
  const userIdInputRef = useRef();
  const passwordInputRef = useRef();
  const { showLoader, hideLoader } = useLoader();
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        userId: userIdInputRef.current?.value,
        password: passwordInputRef.current?.value,
      };
      const response = await apiClient.post("/users/adminlogin", formData, {
        baseURL: apiBaseUrl,
      });

      // store in sessionStorage (clears on browser/tab close)
      const token = response.data.token;      
      sessionStorage.setItem("token", token);

      setMessage({ type: "success", text: "Account created successfully!" });
      navigate("/admin");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage({
        type: "error",
        text: "Failed to sign up. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
       Admin Login
      </h2>
      {message.text && <MZMessage type={message.type} message={message.text} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <MZInputControl
          ref={userIdInputRef}
          inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          labelClass="block mb-1 font-medium text-gray-700"
          required
          title="UserName"
        />
        <MZPasswordControl
          ref={passwordInputRef}
          inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          labelClass="block mb-1 font-medium text-gray-700"
          required
          title="Password"
        />
        <MZButton label="Login" type="submit" />
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Do not have an account?{" "}
        <NavLink to="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default AdminLogin;
