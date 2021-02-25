const itemsReducer = (state = {items: [], analytics: [], loading:false}, action) => {
    const loadingState = {
        ...state,
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

        case 'LOADING_ANALYTICS':
            console.log('Loading Analytics...');
            return loadingState

        case 'LOAD_ANALYTICS':
            return {
                ...state,
                analytics: action.analytics,
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


        case 'EDITING_ITEM':
            console.log('Editing Item...');
            return loadingState

        case 'EDIT_ITEM':
            const idx = state.items.findIndex(item => item.id === action.item.id)
            let newItems = [...state.items]
            newItems[idx] = action.item
            return {
                ...state,
                items: newItems,
                loading: false
            }

        case 'DELETING_ITEM':
            console.log('Deleting Item...');
            return loadingState

        case 'DELETE_ITEM':
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