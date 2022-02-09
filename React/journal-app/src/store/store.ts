import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    auht: authReducer,
    ui: uiReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Tipar el store
// export const store: Store<UserState, UserAction> & {
// dispatch: DispatchTypeUser
// }

export const store = createStore( 
        reducers, 
        composeEnhancers(applyMiddleware( thunk ))
        );

// Tipar los diferentes reducers dentro de nuestro redux
export type RootState = ReturnType<typeof reducers>

// export type RootState = ReturnType< typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;