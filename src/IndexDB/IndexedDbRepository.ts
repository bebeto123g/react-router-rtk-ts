import { TODO_OBJECT_STORE_NAME } from 'IndexDB/constants';
import {
    deletePromise,
    getAllPromise,
    getPromise,
    openDatabasePromise,
    putPromise,
} from 'IndexDB/openDatabasePromise';

export class IndexedDbRepository<TItem> {
    error: unknown;
    keyPath: string;
    dbConnection: IDBDatabase | null = null;
    private readonly openDatabasePromise: Promise<IDBDatabase> | null = null;

    constructor(keyPath: string) {
        this.error = null;
        this.keyPath = keyPath;
        // @ts-ignore
        this.openDatabasePromise = this._openDatabase(keyPath);
    }

    private async _openDatabase(keyPath: string) {
        try {
            this.dbConnection = await openDatabasePromise(keyPath);
        } catch (error) {
            this.error = error;
            throw error;
        }
    }

    private async _tx(
        txMode: IDBTransactionMode,
        callback: (objectStore: IDBObjectStore) => Promise<unknown>
    ) {
        await this.openDatabasePromise; // await db connection
        const transaction = this.dbConnection?.transaction([TODO_OBJECT_STORE_NAME], txMode);
        const objectStore = transaction?.objectStore(TODO_OBJECT_STORE_NAME);
        return await callback(objectStore as IDBObjectStore);
    }

    async findAll() {
        return this._tx('readonly', (objectStore: IDBObjectStore) => getAllPromise(objectStore));
    }

    async findById(key: string | number) {
        return this._tx('readonly', (objectStore: IDBObjectStore) => getPromise(objectStore, key));
    }

    async deleteById(key: string | number) {
        return this._tx('readwrite', (objectStore: IDBObjectStore) => deletePromise(objectStore, key));
    }

    async save(item: TItem) {
        return this._tx('readwrite', (objectStore: IDBObjectStore) => putPromise(objectStore, item));
    }
}
