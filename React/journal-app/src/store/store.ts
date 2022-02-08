import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { authReducer, UserState, UserAction, DispatchType } from '../reducers/authReducer';

const reducers = combineReducers({
    auht: authReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<UserState, UserAction> & {
    dispatch: DispatchType
    } = createStore( reducers, composeEnhancers(
    applyMiddleware( thunk )
));

// export type RootState = ReturnType< typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;