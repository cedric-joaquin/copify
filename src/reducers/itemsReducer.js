const itemsReducer = (state = {items: [], loading:false}, action) => {
    const loadingState = {
        ...state,
        items: [...state.items],
        loading: true
    }

    switch(action.type) {

        case 'LOADING_INVENTORY':
            console.log('Loading Inventory...');
            return loadingState

        case 'LOAD_INVENTORY':
            return {
                ...state,
                items: action.items,
                loading: false
            }

        case 'LOADING_ITEM':
            console.log('Loading Item...');
            return loadingState

        case 'ADD_ITEM':
            console.log(action.item);
            return {
                ...state,
                items: [...state.items, action.item],
                loading: false
            }

        case 'DELETING_ITEM':
            console.log('Deleting Item...');
            return loadingState

        case 'DELETE_ITEM':
            console.log('Hit this event')
            const items = state.items.filter(item => item.id !== action.id)
            return ({
                ...state,
                items,
                loading: false
            })


        default:
            return state;
    }
}

export default itemsReducer;