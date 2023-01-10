const INITIAL_STATE = {
    toppings: [],
    toppingsPrice: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIZE_DATA':
            return {
                ...state,
                size: action.size,
                sizePrice: action.price,
            }
        case 'CRUST_DATA':
            return {
                ...state,
                crust: action.crust,
                crustPrice: action.price,
            }
        case 'TOPPINGS_DATA':
            return {
                ...state,
                toppings: [...action.toppings],
                toppingsPrice: action.price,
            }
        case 'CLEAR_DATA':
            return {
                toppings: [],
                toppingsPrice: 0,
            };

        default:
            return state;
    }
};