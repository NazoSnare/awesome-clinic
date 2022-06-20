import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { appointmentsReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
    user: userReducer,
    appointments: appointmentsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));