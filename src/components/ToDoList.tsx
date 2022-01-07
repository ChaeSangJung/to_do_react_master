import { useRecoilValue } from "recoil";
import { toDoSate, toDoSelector } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
    const toDos = useRecoilValue(toDoSate);
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <div>
                <h1>All</h1>
                <CreateToDo />
                <ul>
                    {toDos.map((todo) => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
            <div>
                <h1>TO DO</h1>
                <ul>
                    {toDo.map((todo) => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
            <div>
                <h1>DOING</h1>
                <ul>
                    {doing.map((todo) => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
            <div>
                <h1>DONE</h1>
                <ul>
                    {done.map((todo) => (
                        <ToDo key={todo.id} {...todo}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;