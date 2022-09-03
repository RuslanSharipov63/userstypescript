import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    users: reducer
})

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch