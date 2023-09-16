import { ERestMethod } from './enums';

export interface IProviderOriginalMethod {
    method: ERestMethod;
    url: string;
    data?: object | FormData;
}

export type TProviderData = object | FormData | null;

export type TProviderMethodProps = [url: string, data?: TProviderData, config?: RequestInit];
