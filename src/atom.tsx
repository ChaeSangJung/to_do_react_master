import { atom } from "recoil";
import { IToDo } from "./types";


export const toDoSate = atom<IToDo[]>({
    key:"toDo",
    default:[],
});