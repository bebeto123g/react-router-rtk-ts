import { EResponseStatus } from './enums';

/** Передаваемые параметры методов головного провайдера */
export type TProviderMethodProps = [
    url: string,
    data?: Pick<RequestInit, 'body'> | null,
    config?: Omit<RequestInit, 'body'> | null
];

/** Ответ головного провайдера */
export interface IProviderResponse<T = null> {
    status: EResponseStatus;
    data?: T | null;
    errorMessage?: string | null;
    error?: Error | null;
    response?: Response;
}
