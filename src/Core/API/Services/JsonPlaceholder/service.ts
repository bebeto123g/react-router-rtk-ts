import { APIProvider } from 'Core/API/Provider';
import { JSON_PLACEHOLDER_BASE_URL } from './constants';
import { IPost, IServicePlaceholderRequestParams, ITodo } from './interfaces';

export class APIServicePlaceholder {
    static async getTodosPages({ page = 0, pageSize = 10 }: IServicePlaceholderRequestParams = {}): Promise<
        ITodo[]
    > {
        return APIProvider.get<ITodo[]>(
            `${JSON_PLACEHOLDER_BASE_URL}/todos?_start=${pageSize * page}&_limit=${pageSize}`
        );
    }

    static async getPostsPages({ page = 0, pageSize = 10 }: IServicePlaceholderRequestParams = {}): Promise<
        IPost[]
    > {
        return APIProvider.get<IPost[]>(
            `${JSON_PLACEHOLDER_BASE_URL}/posts?_start=${pageSize * page}&_limit=${pageSize}`
        );
    }
}
