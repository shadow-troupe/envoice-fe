"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { Pencil, Trash2 } from "lucide-react";

const base_url = "http://localhost:4567";

interface BusinessProfile {
  name: string;
  location: string;
  contact: string;
  logo?: string;
}

export default function BusinessProfilePage() {
  const [profile, setProfile] = useState<BusinessProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    location: "",
    contact: "",
    logo: null as File | null,
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`${base_url}/business-profile/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        setProfile(null);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("location", form.location);
    formData.append("contact", form.contact);
    if (form.logo) formData.append("file", form.logo);
    console.log(formData)
    const token = localStorage.getItem("accessToken");
    const url =
      editing && profile
        ? `${base_url}/business-profile/update`
        : `${base_url}/business-profile/create`;

    const res = await fetch(url, {
      method: editing && profile ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      await fetchProfile();
      setEditing(false);
      setForm({ name: "", location: "", contact: "", logo: null });
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`${base_url}/business-profile/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setProfile(null);
      setShowDeleteModal(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="p-6 text-gray-900">Loading...</div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Business Profile
          </h1>

          {editing ? (
            // FORM SECTION
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-md space-y-4"
            >
              <div>
                <label className="block font-medium mb-1 text-gray-900">
                  Business Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border rounded p-2 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-900">
                  Location
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  className="w-full border rounded p-2 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-900">
                  Contact
                </label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                  className="w-full border rounded p-2 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-900">
                  Logo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      logo: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full text-gray-900"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  {profile ? "Update Profile" : "Create Profile"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : profile ? (
            // PROFILE DISPLAY
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {profile.name}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setForm({
                        name: profile.name || "",
                        location: profile.location || "",
                        contact: profile.contact || "",
                        logo: null,
                      });
                      setEditing(true);
                    }}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-gray-900">
                <strong>Location:</strong> {profile.location}
              </p>
              <p className="text-gray-900">
                <strong>Contact:</strong> {profile.contact}
              </p>
              {profile.logo && (
                <img
                  src={profile.logo}
                  alt="Logo"
                  className="mt-4 max-h-40 object-contain border rounded"
                />
              )}
            </div>
          ) : (
            // NO PROFILE STATE
            <div className="bg-white p-6 rounded shadow-md mt-4">
              <p className="text-gray-900">No business profile found.</p>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Create Profile
              </button>
            </div>
          )}

          {/* DELETE CONFIRMATION MODAL */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Delete Business Profile
                </h2>
                <p className="text-gray-700 mb-6">
                  Are you sure you want to delete this profile? This action
                  cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
