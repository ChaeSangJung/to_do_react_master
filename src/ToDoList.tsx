import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const TodoList = () => {
//     const [todo, setTodo] = useState<string>("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value},
//         } = event;
//         setTodo(value);
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(todo)
//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input 
//                     value={todo}
//                     type="text"
//                     placeholder="Wirte a to do"
//                     onChange={onChange}
//                 />
//                 <button>Add</button>
//             </form>
//         </>
//     )
// }
const TodoList = () => {
    const {register:formResister, handleSubmit, formState} = useForm();
    // handleSubmit validation 담당
    // console.log(formResister("xxx"))
    
    const onValid = (data:any) => {
        console.log(data)
    }

    console.log(formState)

    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...formResister("email",{required: true})} placeholder="Email" />
                <input {...formResister("firstName")} placeholder="First Name" />
                <input {...formResister("lastName")} placeholder="Last Name" />
                <input {...formResister("userName")} placeholder="User name" />
                <input {...formResister("password")} placeholder="Password" />
                <input {...formResister("confirmPassword")} placeholder="confirm password" />
                <button>Add</button>
            </form>
        </div>
    );
}
export default TodoList;