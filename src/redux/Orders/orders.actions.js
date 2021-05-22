import ordersTypes from './orders.types';

export const saveOrderHistory = order => ({
    type: ordersTypes.SAVE_ORDER_HISTORY_START,
    payload: order
});

export const getUserOrderHistory = uid => ({
    type: ordersTypes.GET_USER_ORDER_HISTORY,
    payload: uid
});

export const setUserOrderHistory = history => ({
    type: ordersTypes.SET_USER_ORDER_HISTORY,
    payload: history
});