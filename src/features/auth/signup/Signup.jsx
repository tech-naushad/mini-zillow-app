import React, { useState, useRef } from "react";
import apiClient from "../../../api/apiClient";
import { NavLink } from "react-router-dom";
import { useLoader } from "../../../components/pageLoader/LoaderContext";
import MZInputControl from "../../../components/input/MZInputControl";
import MZEmailControl from "../../../components/input/MZEmailControl";
import MZPasswordControl from "../../../components/input/MZPasswordControl";
import MZButton from "../../../components/button/MZButton";
import MZMessage from "../../../components/message/MZMessage";
const apiBaseUrl = import.meta.env.VITE_AUTH_SERVICE_BASE_URL;

const Signup = () => {
  const fullNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { showLoader, hideLoader } = useLoader();
  const [message, setMessage] = useState({ text: "", type: "" });
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      showLoader();
      const formData = {
        name: fullNameInputRef.current?.value,
        email: emailInputRef.current?.value,
        password: passwordInputRef.current?.value,
      };
      const response = await apiClient.post("/users/register", formData, {
        baseURL: apiBaseUrl,
      });
      setMessage({ type: "success", text: "Account created successfully!" });
      formRef.current.reset();
      
    } catch (error) {
      console.error("Signup error:", error);
      setMessage({
        type: "error",
        text: "Failed to sign up. Please try again.",
      });
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create an Account
      </h2>

      {message.text && <MZMessage type={message.type} message={message.text} />}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <MZInputControl
          ref={fullNameInputRef}
          inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your full name"
          labelClass="block mb-1 font-medium text-gray-700"
          required
        />
        <MZEmailControl
          ref={emailInputRef}
          inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          labelClass="block mb-1 font-medium text-gray-700"
          required
        />
        <MZPasswordControl
          ref={passwordInputRef}
          inputClass="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          labelClass="block mb-1 font-medium text-gray-700"
          required
        />
        <MZButton label="Sign Up" type="submit" />
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Already have an account?{" "}
        <NavLink to="/auth/login" className="text-blue-600 hover:underline">
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default Signup;
