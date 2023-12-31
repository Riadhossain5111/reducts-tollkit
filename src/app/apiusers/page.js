"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react"

export default function Page() {
    const dispatch = useDispatch()
    const apiUserData = useSelector(data => data.usersData.userAPIdata)
    // const data = (apiUserData.usersData.userAPIdata
        // );

        useEffect(()=>{
            dispatch(fetchApiUsers())
        },[])

    return (
        <div>
            <h1>User list from api</h1>
            {/* <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button> */}
            {
                apiUserData.map(item=>(
                    <h4 key={item.id}>{item.name}</h4>
                ))
            }
        </div>
    )

}