import {createStore} from 'redux';
import reducer from './reducers/index';

export const store = createStore(reducer);

const action = (type: any) => store.dispatch({type});
