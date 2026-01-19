import React from "react";
import UserForm from "../components/UserForm";

const Users = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">
            User Management
          </h1>
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default Users;
