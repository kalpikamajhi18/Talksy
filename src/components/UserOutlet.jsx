import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const UserOutlet = () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"))

    const [user, setUser] = useState({})

    useEffect(() => {

        let api = async () => {
            let resp = await fetch('https://api.skillsvarz.com/api/user/' + user_id)
            let res = await resp.json()
            console.log(res)
            setUser(res)
        }
        api()
    }, [user_id])
    return (
        <div>
            <Outlet context={{ user }} />
        </div>
    )
}

export default UserOutlet