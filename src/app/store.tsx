import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store/reducers';

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;