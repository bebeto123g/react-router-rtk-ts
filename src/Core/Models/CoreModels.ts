import { EProcessStatus } from 'Core/Enums';

export interface IAsyncStore<T = null> {
    status: EProcessStatus;
    data?: T | null;
    error?: string | null;
}
