import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
    toDo : string;
}
interface ITodo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
});

const TodoList = () => {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({toDo} : IForm) => {
        setToDos((oldToDos) => [
            {text: toDo, id: Date.now(), category:"TO_DO"},
            ...oldToDos,
        ]);
        setValue("toDo", "");
    }
    return (
        <div>
            <h1>To Dos</h1>
            <form onSubmit={handleSubmit(handleValid)}>
                <input 
                    {...register("toDo", {
                        required: "Please write a to do",
                    })}
                    placeholder="Write a to Do"
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;