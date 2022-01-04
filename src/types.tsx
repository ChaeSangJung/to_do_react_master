export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}
export interface IForm {
    toDo : string;
}