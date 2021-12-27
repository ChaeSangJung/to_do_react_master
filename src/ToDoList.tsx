import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const TodoList = () => {
//     const [toDo, setTodo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onchange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget : {value},
//         } = event;
//         setToDoError("");
//         setTodo(value);
//     };
//     const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer");
//           }
//           console.log("submit");
//     }
//     return (
//         <>
//             <div>
//                 <form onSubmit={onSubmit}>
//                     <input onChange={onchange} value={toDo} placeholder="write a to do"/>
//                     <button>Add</button>
//                     {toDoError !== "" ? toDoError : null}
//                 </form>
//             </div>
//         </>
//     )
// }

const TodoList = () => {
    const { register, watch } = useForm();
    console.log(watch())
    return (
        <>
            <div>
                <form>
                    <input {...register("email")} placeholder="email" />
                    <input {...register("firstName")} placeholder="First Name" />
                    <input {...register("lastName")} placeholder="Last Name" />
                    <input {...register("username")} placeholder="Username" />
                    <input {...register("password")} placeholder="Password" />
                    <input {...register("password1")} placeholder="Password1" />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default TodoList;