import cuid from 'cuid';

const itemsReducer = (state = {items: [], loading:false}, action) => {
    switch(action.type) {

        case 'LOADING_INVENTORY':
            console.log('Loading Inventory...');
            return {
                ...state,
                items: [...state.items],
                loading: true
            }

        case 'LOAD_INVENTORY':
            return {
                ...state,
                items: action.items,
                loading: false
            }

        default:
            return state;
    }
}

export default itemsReducer;