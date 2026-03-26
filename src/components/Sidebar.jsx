import React, { useState } from 'react'
import Recentchatbox from './Recentchatbox'
import { FiSettings } from "react-icons/fi";
import { LogOutIcon, MessageCircleCheck, Settings, User2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const navigate = useNavigate()
  const [isenable, setIsenable] = useState(true)
  const [search, setSearch] = useState([])

  // 🔍 Search API
  const searchData = async (event) => {
    let url = "https://api.skillsvarz.com/api/user/search?query="
    let resp = await fetch(url + event.target.value)
    let res = await resp.json()

    if (resp.status === 200 || resp.status === 201) {
      setSearch(res)
    } else {
      setSearch([])
    }
  }

  return (
    <>
      {isenable ? (

        // ================= CHAT VIEW =================
        <div className="h-screen w-[20%] min-w-[260px] bg-[#5E2D3F] text-white flex flex-col justify-between">

          {/* Top */}
          <div className="p-4">

            {/* Search */}
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search chats..."
                onChange={searchData}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Recent Chats */}
            <h2 className="text-gray-300 text-sm px-2 mb-2">Recent Chats</h2>

            <div className="space-y-2 overflow-y-auto max-h-[70vh] pr-1">

              {/* 🔁 Dynamic search results (optional) */}
              {search.length > 0 ? (
                search.map((item, index) => (
                  <Recentchatbox key={index} name={item.name} email={item.email}/>
                ))
              ) : (
                <span>No Recent Chats..</span>
              )}

            </div>
          </div>

          {/* Bottom User */}
          <div className="p-4 border-t border-white/10 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition">

            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src={`https://ui-avatars.com/api/?name=${user.name}&background=ffffff&color=5E2D3F`}
                alt="user"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#5E2D3F] rounded-full"></span>
            </div>

            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-300">Online</p>
              </div>

              <FiSettings
                className="text-xl cursor-pointer hover:rotate-90 transition duration-300"
                onClick={() => setIsenable(false)}
              />
            </div>
          </div>

        </div>

      ) : (

        // ================= SETTINGS VIEW =================
        <div className="w-[20%] h-screen bg-[#5E2D3F] text-white flex flex-col">

          {/* Search */}
          <div className="p-3 border-b border-white/10">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Settings */}
          <div className="flex-1 overflow-y-auto p-3">
            <h2 className="text-gray-300 text-sm px-2 mb-4">Settings</h2>

            <button
              onClick={() => setIsenable(true)}
              className="flex items-center gap-2 my-2 w-full p-2 rounded-lg bg-white/10 transition"
            >
              <MessageCircleCheck />
              <span>My Chats</span>
            </button>

            <button
              onClick={() => navigate("/user/resetpassword")}
              className="flex items-center gap-2 my-2 w-full p-2 rounded-lg bg-white/10 transition"
            >
              <Settings />
              <span>Setting</span>
            </button>

            <button
              onClick={() => navigate("/user/profile")}
              className="flex items-center gap-2 my-2 w-full p-2 rounded-lg bg-white/10 transition"
            >
              <User2Icon />
              <span>Profile</span>
            </button>

            <button
              className="flex items-center gap-2 my-2 w-full p-2 rounded-lg bg-red-400/20 transition"
            >
              <LogOutIcon className="text-red-300" />
              <span>LogOut</span>
            </button>
          </div>

          {/* User Bottom */}
          <div className="h-[70px] bg-white/10 flex items-center gap-3 px-3 border-t border-white/10">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}&background=ffffff&color=5E2D3F`}
                alt=""
              />
            </div>
            <h2 className="font-medium">{user.name}</h2>
          </div>

        </div>

      )}
    </>
  )
}

export default Sidebar