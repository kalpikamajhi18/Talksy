import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'

const Resetpassword = () => {
  const navigate = useNavigate()
  const { user } = useOutletContext()

  const [resetpassword, setResetpassword] = useState({
    password: "",
    cpassword: ""
  })

  const handlepass = (e) => {
    setResetpassword({ ...resetpassword, [e.target.name]: e.target.value })
  }

  const changepassword = async () => {
    if (resetpassword.password === resetpassword.cpassword) {
      let url = "https://api.skillsvarz.com/api/user/" + user._id

      let resp = await fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: resetpassword.password })
      })

      if (resp.status === 200 || resp.status === 201) {
        toast.success("Password changed")
        setTimeout(() => {
          navigate("/login")
        }, 1000)
      } else {
        toast.error("Something went wrong")
      }
    } else {
      toast.error("Confirm password does not match")
    }
  }

  const deleteAccount = async () => {
    let conf = confirm("Are you sure you want to delete?")
    if (conf) {
      let resp = await fetch("https://api.skillsvarz.com/api/user/" + user._id, {
        method: 'DELETE',
      })

      let res = await resp.json()

      if (resp.status === 200 || resp.status === 201) {
        toast.success(res?.message || "Account Deleted")
        setTimeout(() => {
          navigate('/login')
        }, 500)
      }
      else toast.error(res?.error || "Try Again")
    }
  }

  return (
    <div className="h-full w-full bg-[#f8f5f6] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-[#eadde1]">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#5E2D3F]">
          Reset Password
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Password */}
          <div>
            <label className="text-sm text-[#a78b94]">New Password</label>
            <input
              onChange={handlepass}
              type="password"
              name="password"
              placeholder="Enter new password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-[#a78b94]">Confirm Password</label>
            <input
              onChange={handlepass}
              type="password"
              name="cpassword"
              placeholder="Confirm password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#fdfafb] border border-[#eadde1] focus:outline-none focus:ring-2 focus:ring-[#5E2D3F]"
            />
          </div>

          {/* Change Password */}
          <button
            onClick={changepassword}
            className="mt-3 bg-[#5E2D3F] hover:opacity-90 text-white py-2 rounded-lg transition"
          >
            Change Password
          </button>

          {/* Delete Account */}
          <button
            onClick={deleteAccount}
            className="mt-2 bg-[#f3e7eb] hover:bg-[#eadde1] text-[#5E2D3F] py-2 rounded-lg transition"
          >
            Delete Account
          </button>

        </div>

      </div>
    </div>
  )
}

export default Resetpassword