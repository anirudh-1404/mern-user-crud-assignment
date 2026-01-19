import React from "react";

const UserTable = () => {
  return (
    <>
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
            <tr className="hover:bg-slate-50 transition">
              <td className="px-4 py-3 border-b text-slate-700">User name</td>
              <td className="px-4 py-3 border-b text-slate-700">User email</td>
              <td className="px-4 py-3 border-b text-slate-700">User age</td>
              <td className="px-4 py-3 border-b text-slate-700">
                <button className="rounded-md text-white text-sm bg-amber-500 hover:bg-amber-600 transition px-3 py-1 mr-5">
                  Edit
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-slate-500 py-6">No users found</p>
    </>
  );
};

export default UserTable;
