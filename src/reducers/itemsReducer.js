
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

        case 'LOADING_ITEM':
            console.log('Loading Item...');
            return {
                ...state,
                items: [...state.items],
                loading: true
            }

        case 'ADD_ITEM':
            console.log(action.item);
            return {
                ...state,
                items: [...state.items, action.item],
                loading: false
            }

        default:
            return state;
    }
}

export default itemsReducer;