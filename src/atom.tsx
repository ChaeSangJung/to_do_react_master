import { atom, selector } from "recoil";
import ToDo from "./components/ToDo";
import { IToDo } from "./types";


export const toDoSate = atom<IToDo[]>({
    key:"toDo",
    default:[],
});

// export const toDoSelector = selector({
//     key: "toDoSelector",
//     get: ({get}) => {
//         return "hello";
//     }
// });

// export const toDoSelector = selector({
//     key: "toDoSelector",
//     get: ({get}) => {
//         const toDos = get(toDoSate);
//         return toDos.length;
//     }
// });

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoSate);
        return [
            toDos.filter((toDo) => toDo.category === "TO_DO"),
            toDos.filter((toDo) => toDo.category === "DOING"),
            toDos.filter((toDo) => toDo.category === "DONE"),
        ]
    }
});