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
    const { register, handleSubmit, formState } = useForm();
    const onValid = (data : {}) => {
        console.log(data);
    }
    console.log(formState.errors)
    return (
        <>
            <div>
                <form 
                    style={{display:"flex", flexDirection:"column"}}
                    onSubmit={handleSubmit(onValid)}
                >
                    <input 
                        {...register("email", {required: true})} 
                        placeholder="email" 
                    />
                    <input 
                        {...register("firstName", {required: true})} 
                        placeholder="First Name" 
                    />
                    <input 
                        {...register("lastName", {required: true})} 
                        placeholder="Last Name" 
                    />
                    <input 
                        {...register("username", {required: true, minLength: 10})} 
                        placeholder="Username" 
                    />
                    <input 
                        {...register("password", {required: true, minLength: 5})} 
                        placeholder="Password" 
                    />
                    <input 
                        {...register("password1", {required: true})} 
                        placeholder="Password1" 
                    />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default TodoList;