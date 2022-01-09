import { atom, selector } from "recoil";
import { Categories, IToDo } from "./types";



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

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoSate);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
        // console.log(category)
        // return [
        //     toDos.filter((toDo) => toDo.category === "TO_DO"),
        //     toDos.filter((toDo) => toDo.category === "DOING"),
        //     toDos.filter((toDo) => toDo.category === "DONE"),
        // ]
    }
});