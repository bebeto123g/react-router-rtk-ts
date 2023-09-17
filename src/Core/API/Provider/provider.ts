import { ProviderRequestDecorator } from './decorators';
import { ERestMethod } from './enums';
import { TProviderMethodProps } from './interfaces';

export class APIProvider {
    @ProviderRequestDecorator
    public static async get<T>(..._args: TProviderMethodProps): Promise<T> {
        return ERestMethod.GET as T;
    }

    @ProviderRequestDecorator
    public static async post<T>(..._args: TProviderMethodProps): Promise<T> {
        return ERestMethod.POST as T;
    }

    @ProviderRequestDecorator
    public static async patch<T>(..._args: TProviderMethodProps): Promise<T> {
        return ERestMethod.PATCH as T;
    }

    @ProviderRequestDecorator
    public static async delete<T>(..._args: TProviderMethodProps): Promise<T> {
        return ERestMethod.DELETE as T;
    }

    private static async request() {
        // TODO возомжно вынести декоратор только для этого метода
    }
}
