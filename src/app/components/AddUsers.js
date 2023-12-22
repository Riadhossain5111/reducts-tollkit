"use client"

import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUsers() {
    const [name,setName] = useState('');
    const dispatch = useDispatch()
    const userDispatch=() =>{
        dispatch(addUser(name))
    }

    return (
        <div className="addUser">
            <h3>User List</h3>
            <input className="addUser-input"
            onChange={(e) =>setName(e.target.value)}
             type="text" placeholder="Add New User" />
            <br />
            <button onClick={userDispatch} className="addUser-btn">Add User</button>
            <br />
            <Link href='/removeUser'>RemoveUser</Link>
            <br />
            <Link href='/todolist'>AddToList</Link>
            <br />
            <Link href='/apiusers'>Api User</Link>
        </div>
    )

}