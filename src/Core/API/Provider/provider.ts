export class APIProvider {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url, {
            method: 'GET',
            headers: { ['Content-Type']: 'application/json' },
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    async post<TResponse, TData extends object | FormData>(url: string, data: TData): Promise<TResponse> {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ['Content-Type']: data instanceof FormData ? 'multipart/form-data' : 'application/json',
            },
            body: data instanceof FormData ? data : JSON.stringify(data),
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    async patch<TResponse, TData extends object | FormData>(url: string, data: TData): Promise<TResponse> {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                ['Content-Type']: data instanceof FormData ? 'multipart/form-data' : 'application/json',
            },
            body: data instanceof FormData ? data : JSON.stringify(data),
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    async delete<TResponse>(url: string): Promise<TResponse> {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { ['Content-Type']: 'application/json' },
        });

        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }
}
