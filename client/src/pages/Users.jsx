import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import API from "../../services/api";
import UserTable from "../components/UserTable";
import EditUserModal from "../components/EditUserModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const getAllUsers = async () => {
    try {
      const response = await API.get("/");
      setUsers(response.data.data);
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">
            User Management
          </h1>
          <UserForm setUsers={setUsers} />
          <UserTable
            users={users}
            setUsers={setUsers}
            setEditingUser={setEditingUser}
            setIsEditModalOpen={setIsEditModalOpen}
          />

          {isEditModalOpen && editingUser && (
            <EditUserModal
              editingUser={editingUser}
              setEditingUser={setEditingUser}
              setIsEditModalOpen={setIsEditModalOpen}
              setUsers={setUsers}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
