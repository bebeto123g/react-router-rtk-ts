import { EProcessStatus } from 'Core/Enums';

export interface IAsyncStore<T> {
    status: EProcessStatus;
    data: T | null;
    error: string | null;
}
