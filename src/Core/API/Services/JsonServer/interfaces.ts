export interface ITodoQuery {
    id: number;
    title: string;
    completed: boolean;
}

export interface IPostQuery {
    id: number;
    title: string;
    text: string;
    createDate: Date | string;
    order?: number;
}
