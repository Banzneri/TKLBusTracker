export const UPDATE_BUSSES = 'UPDATE_BUSSES';
export const ADD_BUS_FILTER = 'ADD_NEW_BUS_FILTER';
export const REMOVE_BUS_FILTER = 'REMOVE_NEW_BUS_FILTER';

export function updateBusses(busses) {
    return { type: UPDATE_BUSSES, busses }
}

export function addBusFilter(bus) {
    return { type: ADD_BUS_FILTER, bus }
}

export function removeBusFilter(bus) {
    return { type: REMOVE_BUS_FILTER, bus }
}