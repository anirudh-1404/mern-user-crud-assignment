import React from "react";
import UserTable from "./UserTable";

const UserForm = () => {
  return (
    <>
      <form action="" className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <input
          type="text"
          placeholder="Name"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Age"
          className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-indigo-700 transition self-end">
          Add
        </button>
      </form>

      <UserTable />
    </>
  );
};

export default UserForm;
