export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IServicePlaceholderRequestParams {
    pageSize?: number;
    page?: number;
}
