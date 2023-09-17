export type TCreateDecoratorAction<TSelf, TReturn = unknown> = (
    self: TSelf,
    originalMethod: (...args: any[]) => any,
    ...args: any[]
) => Promise<TReturn> | TReturn;

export function createDecorator<TSelf = any, TReturn = unknown>(
    action: TCreateDecoratorAction<TSelf, TReturn>
) {
    return (_target: TSelf, _key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const self = this as TSelf;
            return action(self, originalMethod, ...args);
        };
    };
}
