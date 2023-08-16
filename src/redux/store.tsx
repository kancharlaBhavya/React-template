import { createStore } from "redux";
import { loadingActionReducer } from './reducer';

type RootState = ReturnType<typeof loadingActionReducer>;

export const store = createStore(loadingActionReducer);


