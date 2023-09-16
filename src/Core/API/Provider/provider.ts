import { ProviderRequestDecorator } from './decorators';
import { ERestMethod } from './enums';
import { TProviderMethodProps } from './interfaces';

export class APIProvider {
    @ProviderRequestDecorator
    public static async get(..._args: TProviderMethodProps) {
        return ERestMethod.GET;
    }

    @ProviderRequestDecorator
    public static async post(..._args: TProviderMethodProps) {
        return ERestMethod.POST;
    }

    @ProviderRequestDecorator
    public static async patch(..._args: TProviderMethodProps) {
        return ERestMethod.PATCH;
    }

    @ProviderRequestDecorator
    public static async delete(..._args: TProviderMethodProps) {
        return ERestMethod.DELETE;
    }
}
