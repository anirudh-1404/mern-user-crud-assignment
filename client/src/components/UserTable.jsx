import React, { useEffect, useState } from "react";
import API from "../../services/api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UserTable = () => {
  const [showUsers, setShowUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await API.get("/");
      setShowUsers(response.data.data);
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await API.delete(`/delete/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message || "User deleted successfully!");
        getAllUsers();
      }
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {showUsers.length === 0 ? (
        <p className="text-center text-slate-500 py-6">No users found</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-3 text-slate-600 font-semibold border-b">
                  Name
                </th>
                <th className="text-left px-4 py-3 text-slate-600 font-semibold border-b">
                  Email
                </th>
                <th className="text-left px-4 py-3 text-slate-600 font-semibold border-b">
                  Age
                </th>
                <th className="text-left px-4 py-3 text-slate-600 font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {showUsers.map((user) => {
                return (
                  <>
                    <tr className="hover:bg-slate-50 transition" key={user._id}>
                      <td className="px-4 py-3 border-b text-slate-700">
                        {user.name}
                      </td>
                      <td className="px-4 py-3 border-b text-slate-700">
                        {user.email}
                      </td>
                      <td className="px-4 py-3 border-b text-slate-700">
                        {user.age}
                      </td>
                      <td className="px-4 py-3 border-b text-slate-700">
                        <button className="rounded-md text-white text-sm bg-amber-500 hover:bg-amber-600 transition px-3 py-1 mr-5">
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserTable;
