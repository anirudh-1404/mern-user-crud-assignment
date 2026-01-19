import React, { useEffect, useState } from "react";
import API from "../../services/api";
import toast from "react-hot-toast";

const EditUserModal = ({
  editingUser,
  setEditingUser,
  setIsEditModalOpen,
  setUsers,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        age: editingUser.age,
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.patch(`/update/${editingUser._id}`, formData);
      toast.success("User updated");
      setUsers((prev) =>
        prev.map((u) => (u._id === res.data.data._id ? res.data.data : u)),
      );
      setIsEditModalOpen(false);
      setEditingUser(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded-lg"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded-lg"
            />
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded-lg"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditingUser(null);
                }}
                className="border px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
