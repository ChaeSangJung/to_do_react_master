import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoSate } from "../atom";
import { IToDo } from "../types";

function ToDo({text, category, id}:IToDo){
    const setTodos = useSetRecoilState(toDoSate);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget : {dataset : {name}},
        } = event;
        setTodos((oldToDos)=>{
            // target 경로 찾기
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text:text, id:id, category:name};
            console.log(oldToDo, newToDo);
            return oldToDos;
        });
    }
    
    return (
        <li>
            <span>{text}{category}</span>
            {category !== "DOING" && (
                <button data-name="DOING" onClick={onClick}>Doing</button>
            )}
            {category !=="TO_DO" && (
                <button data-name="TO_DO" onClick={onClick}>TO DO</button>
            )}
            {category !=="DONE" && (
                <button data-name="DONE" onClick={onClick}>DONE</button>
            )}
            {/* <button>Doing</button>
            <button>To Do</button>
            <button>Done</button> */}
        </li>
    );
}

export default ToDo;