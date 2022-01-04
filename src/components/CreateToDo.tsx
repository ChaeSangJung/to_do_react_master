import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoSate } from "../atom";
import { IForm } from "../types";

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoSate);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({ toDo }:IForm) => {
        setToDos((oldTodos) => [
            {text: toDo, id:Date.now(), category: "TO_DO"},
            ...oldTodos,
        ]);
        setValue("toDo", "");
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required:"Please write a To Do"
                    })}
                    placeholder="Write a to Do"
                />
            </form>
            <button>Add</button>
        </>
    );
}

export default CreateToDo;