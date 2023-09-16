import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { EProcessStatus } from 'Core/Enums';
import { IAsyncStore } from 'Store/interfaces';

type TThunk<T> = ReturnType<typeof createAsyncThunk<T>>;
type TBuilder<T> = ActionReducerMapBuilder<IAsyncStore<T>>;

export class ReduxUtils {
    public static createThunkExtraReducers<T>(thunk: TThunk<T>, builder: TBuilder<unknown>) {
        builder.addCase(thunk.fulfilled.type, (state, action: PayloadAction<unknown>) => {
            state.status = EProcessStatus.SUCCESS;
            state.error = null;
            state.data = action.payload;
        });

        builder.addCase(thunk.pending.type, (state) => {
            state.status = EProcessStatus.PENDING;
        });

        builder.addCase(thunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
    }

    public static setThunkErrorAsyncState(state: IAsyncStore<unknown>, action: PayloadAction<string>) {
        state.status = EProcessStatus.ERROR;
        state.error = action.payload;
    }

    public static createDefaultAsyncState<T>(initialData?: T) {
        return {
            data: initialData || null,
            error: null,
            status: EProcessStatus.IDLE,
        };
    }
}
