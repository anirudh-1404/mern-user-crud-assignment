import React, { useState } from "react";
import UserTable from "./UserTable";
import API from "../../services/api";
import toast from "react-hot-toast";

const UserForm = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = async (data) => {
    try {
      const response = await API.post("/create", data);
      if (response.status === 201) {
        toast.success(response.data.message);
        setUsers((prev) => [response.data.data, ...prev]);
      }
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    createUser(formData);
    setFormData({ name: "", email: "", age: "" });
  };

  return (
    <>
      <form
        onSubmit={handleSubmission}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-indigo-700 transition self-end">
          Add
        </button>
      </form>
    </>
  );
};

export default UserForm;
