import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoSate } from "../atom";
import { IForm } from "../types";

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoSate);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({ toDo }:IForm) => {
        setToDos((oldTodos) => [
            ...oldTodos,
            {text: toDo, id:Date.now(), category:category},
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