import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSate, toDoSelector } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
    const toDos = useRecoilValue(toDoSate);
    const toSoSelect = useRecoilValue(toDoSelector);
    // 현재의 값과, 값을 수정하는 함수를 가져오는 훅
    const [category, setCategory] = useRecoilState<string>(categoryState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        const {  currentTarget: {value} } = event;
        setCategory(value);
    }

    return (
        <div>
            <div>
                <h1>All</h1>
                <select value={category} onInput={onInput}>
                    <option value="TO_DO">To Do</option>
                    <option value="DOING">Doing</option>
                    <option value="DONE">Done</option>
                </select>
                <CreateToDo />
                <ul>
                    {toDos.map((todo) => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
            <hr/>
            <div>
                <h1>selected</h1>
                <strong>{category}</strong>
                <ul>
                    {toSoSelect.length === 0 ? (
                      <p>none</p>  
                    ) : 
                        toSoSelect.map((to) => (
                            <ToDo key={to.id} {...to}/>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default TodoList;