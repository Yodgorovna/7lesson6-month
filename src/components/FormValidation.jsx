import React, { useState } from "react";
import "./formValidation.css";
import { object } from "yup";

export const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "password should be at least 8 char";
    }

    if (formData.confirmpassword !== formData.password) {
      validationErrors.confirmpassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 mt-28 ml-96 mr-96">
      <div className="border-solid border-2 border-x-zinc-900 p-5">
        <div className="mt-2 mb-2">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2 mb-4">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="given-name"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.username && (
              <span className="text-red-600">{errors.username}</span>
            )}
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2 mb-4">
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                autoComplete="given-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email}</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2 mb-4">
            <input
              type="password"
              name="password"
              placeholder="********"
              autoComplete="given-name"
              onChange={handleChange}
              className="block w-full rounded-md border-0  px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password}</span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm Password
          </label>
          <div className="mt-2 mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              autoComplete="given-name"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.confirmpassword && (
              <span className="text-red-600">{errors.confirmpassword}</span>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
