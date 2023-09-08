import { ERestMethod } from './enums';

class APIProvider {
    constructor() {
        this.post = this.post.bind(this);
    }

    @ProviderRequestDecorator
    async post(_url: string, _data?: object | FormData): Promise<ERestMethod> {
        return ERestMethod.POST;
    }
}

/** Декоратор для методовов APIProvider */
export function ProviderRequestDecorator(
    originalMethod: (url: string, data?: object | FormData) => Promise<ERestMethod>,
    _context: any
) {
    async function replacementMethod(this: APIProvider, url: string, data?: object | FormData) {
        const method = await originalMethod.call(this, url, data);

        const response = await fetch(url, {
            method,
            headers: {
                ['Content-Type']: data instanceof FormData ? 'multipart/form-data' : 'application/json',
            },
            body: !data || data instanceof FormData ? data : JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }

    return replacementMethod;
}
