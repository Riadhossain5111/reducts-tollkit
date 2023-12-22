
"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";


export default function DisplayUser() {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch()
    console.log(userData);
    return(
        <div className="displayUser">
           <h3>User List</h3>
           {
            userData.map(data=>(
                <div key={data.id}>
                    <span>{data.name}</span>
                    <button onClick={()=>dispatch(removeUser(data.id))}>Remove</button>
                </div>
            ))
           }
        </div>
    )
    
}   