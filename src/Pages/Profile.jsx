import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Profile = () => {
  const { user } = useOutletContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setUserData(user)
  }, [user])

  const [isedit, setIsedit] = useState(true)

  const handlechange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleEdit = () => {
    setIsedit(!isedit)
  }

  const handleCancel = () => {
    setUserData(user)
    setIsedit(true)
  }

  return (
    <div className="h-full w-full bg-[#f8f5f6] p-6">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-[#5E2D3F]">
          Profile Settings
        </h2>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#eadde1]">

          {/* User Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#5E2D3F] flex items-center justify-center text-white text-lg font-semibold">
              {userData.name ? userData.name.charAt(0) : "U"}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#5E2D3F]">
                {userData.name}
              </h3>
              <p className="text-sm text-[#a78b94]">
                Manage your account
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <label className="text-sm text-[#a78b94]">Your Name</label>
              <input
                onChange={handlechange}
                type="text"
                name="name"
                value={userData.name || ""}
                disabled={isedit}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-[#a78b94]">Your Email</label>
              <input
                onChange={handlechange}
                type="email"
                name="email"
                value={userData.email || ""}
                disabled={isedit}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-[#a78b94]">Your Phone</label>
              <input
                onChange={handlechange}
                type="number"
                name="phone"
                value={userData.phone || ""}
                disabled={isedit}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-sm text-[#a78b94]">Username</label>
              <input
                onChange={handlechange}
                type="text"
                name="username"
                value={userData.username || ""}
                disabled={isedit}
                placeholder="Enter username..."
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F] disabled:opacity-70"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">

            <button
              onClick={handleEdit}
              className="bg-[#5E2D3F] hover:opacity-90 text-white px-5 py-2 rounded-lg transition"
            >
              {isedit ? 'Edit Profile' : 'Save Changes'}
            </button>

            {!isedit && (
              <button
                onClick={handleCancel}
                className="bg-[#f3e7eb] hover:bg-[#eadde1] text-[#5E2D3F] px-5 py-2 rounded-lg transition"
              >
                Cancel
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile