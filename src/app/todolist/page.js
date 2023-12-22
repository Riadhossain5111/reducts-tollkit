"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice";

export default function Page() {
    const [todo, setTodo] = useState('')
    const todoData = useSelector((data) => data.todosData.todos)
    // console.log(todoData);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Add todo</h3>
            <input type="text" onChange={e => setTodo(e.target.value)} placeholder="add me" />
            <button onClick={() => dispatch(addTodos(todo))}>Add Me</button>

            <h4>To do list</h4>
            {
                todoData.length && todoData.map(item => (
                    <div>  <h6  key={item.id}>{item.name}</h6></div>
                ))
            }

        </div>
    )

}