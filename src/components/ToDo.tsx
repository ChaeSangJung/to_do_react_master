import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoSate } from "../atom";
import { Categories, IToDo } from "../types";

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
            const newToDo = {text:text, id:id, category:name as any };
            //  replace the to do in the index, targetIndex with newToDo
            // const food = ["가","나", "다", "라"];
            // const front = ["가"];
            // const back = ["다", "라"]
            // const finalPart = [...front, "나", ...back];

            // const target = 1;

            // console.log(food.slice(0,target), food.slice(target+1));
            // console.log([...food.slice(0, target),"나",...food.slice(target+1)]);
            return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
        });
    }
    
    return (
        <li>
            <span>{text}{category}</span>
            {category !== Categories.DOING && (
                <button data-name={Categories.DOING} onClick={onClick}>Doing</button>
            )}
            {category !== Categories.TO_DO && (
                <button data-name={Categories.TO_DO} onClick={onClick}>TO DO</button>
            )}
            {category !== Categories.DONE && (
                <button data-name={Categories.DONE} onClick={onClick}>DONE</button>
            )}
            {/* <button>Doing</button>
            <button>To Do</button>
            <button>Done</button> */}
        </li>
    );
}

export default ToDo;