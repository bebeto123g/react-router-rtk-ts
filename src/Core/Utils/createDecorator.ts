import { IAsyncStore } from 'Core/Models';

export type TCreateDecoratorAction<T> = (
    self: T,
    originalMethod: (...args: any[]) => any,
    ...args: any[]
) => Promise<IAsyncStore> | void;

export function createDecorator<T = any>(action: TCreateDecoratorAction<T>) {
    return (target: T, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const self = this as T;
            return action(self, originalMethod, ...args);
        };
    };
}
