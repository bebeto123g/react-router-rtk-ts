import { ERestMethod } from './enums';

export interface IProviderOriginalMethod {
    method: ERestMethod;
    url: string;
    data?: object | FormData;
}
