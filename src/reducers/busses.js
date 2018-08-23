import { UPDATE_BUSSES, ADD_BUS_FILTER, REMOVE_BUS_FILTER } from './actionCreators';

const initialState = {
    busses = [],
    filteredBusses = []
}

function busses(state = initialState, action) {
    console.log("Inside the BusReducer");
    console.log(state, action);
    switch (action.type) {
        case UPDATE_BUSSES:
            return Object.assign({}, state, {
                busses: action.busses
            });
        case ADD_BUS_FILTER:
            return Object.assign({}, state, {
                filteredBusses: [
                    ...state.filteredBusses,
                    action.bus
                ]
            });
        case REMOVE_BUS_FILTER:
            return Object.assign({}, state, {
                filteredBusses: state.filteredBusses.filter(e => (e !== action.bus))
            });
        default:
            return state;
    }
}

export default busses;