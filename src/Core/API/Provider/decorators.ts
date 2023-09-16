import { EProcessStatus } from 'Core/Enums';
import { createDecorator } from 'Core/Utils';
import { ERestMethod } from './enums';
import { TProviderMethodProps } from './interfaces';
import { APIProvider } from './provider';

/** Декоратор для методовов APIProvider */
export const ProviderRequestDecorator = createDecorator<APIProvider>(
    async (
        self,
        originalMethod: (...args: TProviderMethodProps) => Promise<ERestMethod>,
        ...args: TProviderMethodProps
    ) => {
        try {
            const method = await originalMethod.call(self, ...args);
            const [url, data, config] = args;

            const response = await fetch(url, {
                method,
                headers: {
                    ['Content-Type']: data instanceof FormData ? 'multipart/form-data' : 'application/json',
                },
                body: !data || data instanceof FormData ? data : JSON.stringify(data),
                ...(config || null),
            });

            if (!response.ok) {
                return { status: EProcessStatus.ERROR, error: response.statusText };
            }

            const responseData = await response.json();
            return { status: EProcessStatus.SUCCESS, data: responseData };
        } catch (error) {
            return { status: EProcessStatus.ERROR, error: (error as Error).message };
        }
    }
);

export const ErrorHandleDecorator = createDecorator(
    async (self: any, originalMethod: any, ...args: any[]) => {
        try {
            return await originalMethod.call(self, ...args);
        } catch (error) {
            return { status: EProcessStatus.ERROR, error: (error as Error).message };
        }
    }
);

// старый вариант// export function ProviderRequestDecorator2(originalMethod: any, _context: any) {
// //     console.log({ originalMethod, _context });
// //
// //     async function replaceMethod(self: any, ...args: any[]) {
// //         console.log({ self, args });
// //
// //         const method = await originalMethod.call(null, ...args);
// //
// //         if (!method) {
// //             throw new Error('Оказия :(');
// //         }
// //
// //         const [url, data, config] = args;
// //
// //         const response = await fetch(url, {
// //             method,
// //             headers: {
// //                 ['Content-Type']: data instanceof FormData ? 'multipart/form-data' : 'application/json',
// //             },
// //             body: !data || data instanceof FormData ? data : JSON.stringify(data),
// //             ...(config || null),
// //         });
// //
// //         if (!response.ok) {
// //             throw new Error(response.statusText);
// //         }
// //
// //         const responseData = await response.json();
// //
// //         return responseData;
// //     }
// //
// //     return replaceMethod;
// // }
