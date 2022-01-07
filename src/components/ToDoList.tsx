import { useRecoilValue } from "recoil";
import { toDoSate } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
    const toDos = useRecoilValue(toDoSate);
    console.log(toDos)
    return (
        <div>
            <h1>To Dos</h1>
            <CreateToDo />
            <ul>
                {toDos.map((todo) => (
                    <ToDo key={todo.id} {...todo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;