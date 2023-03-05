import {AnyAction, applyMiddleware, createStore} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk'
import reducer, { StateType } from './reducers/index';

export const store = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<StateType, any, AnyAction>