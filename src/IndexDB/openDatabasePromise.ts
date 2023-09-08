import { TODO_DB_NAME, TODO_OBJECT_STORE_NAME } from 'IndexDB/constants';

export function openDatabasePromise(keyPath: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const dbOpenRequest = window.indexedDB.open(TODO_DB_NAME, 1.0);

        dbOpenRequest.onblocked = () => {
            reject(
                'Требуется обновление структуры базы данных, хранимой в вашем браузере, ' +
                    'но браузер уведомил о блокировке базы данных.'
            );
        };

        dbOpenRequest.onerror = (err) => {
            console.log('Unable to open indexedDB ' + TODO_DB_NAME);
            console.log(err);

            reject(
                'Невозможно открыть базу данных, либо при её открытии произошла неисправимая ошибка.' +
                    // @ts-ignore
                    (err?.message ? 'Техническая информация: ' + err?.message : '')
            );
        };

        dbOpenRequest.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            // @ts-ignore
            const db = event?.target?.result;
            try {
                db.deleteObjectStore(TODO_OBJECT_STORE_NAME);
            } catch (err) {
                console.log(err);
            }
            db.createObjectStore(TODO_OBJECT_STORE_NAME, { keyPath });
        };

        dbOpenRequest.onsuccess = () => {
            console.info('Successfully open indexedDB connection to ' + TODO_DB_NAME);
            resolve(dbOpenRequest.result);
        };

        dbOpenRequest.onerror = reject;
    });
}

// Оборачиваем функции от ObjectStore, поддерживающие интерфейс IDBRequest
// в вызов с использованием Promise
function wrap(methodName: string) {
    return function (...args: any[]) {
        const [objectStore, ...etc] = args;
        return new Promise((resolve, reject) => {
            const request = objectStore[methodName](...etc);
            request.onsuccess = () => resolve(request.result);
            request.onerror = reject;
        });
    };
}

export const deletePromise = wrap('delete');
export const getAllPromise = wrap('getAll');
export const getPromise = wrap('get');
export const putPromise = wrap('put');
