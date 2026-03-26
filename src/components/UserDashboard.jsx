import React from 'react'
import { useOutletContext } from 'react-router-dom'

const UserDashboard = () => {

    const { user } = useOutletContext()

    return (
        <div className='h-screen w-full overflow-hidden '>
        <img className='object-cover  w-full' src="/talksy.png" alt="" />
        </div>
    )
}

export default UserDashboard