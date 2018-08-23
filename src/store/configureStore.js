import { createStore } from 'redux';
import busses from '.../reducers/busses';

const store = createStore(busses);

export default store;