import React, { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const onchange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget : {value},
        } = event;
        setTodo(value);
    };
    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo)
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input onChange={onchange} value={todo} placeholder="write a to do"/>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default TodoList;