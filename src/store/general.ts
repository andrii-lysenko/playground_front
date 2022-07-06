import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type AppState = 'idle' | 'loading' | 'busy' | 'error';

interface GlobalState {
    appState: AppState;
}

const initialState: GlobalState = { appState: 'idle' };

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setAppState(state, action: PayloadAction<AppState>) {
            state.appState = action.payload;
        },
    },
});

export const { setAppState } = globalSlice.actions;
export default globalSlice.reducer;
