export const fetchItems = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_INVENTORY'})
        fetch('http://localhost:4000/items')
            .then(resp => resp.json())
            .then(items => dispatch({type:'LOAD_INVENTORY', items}))
    }
}

export const addItem = (item) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ITEM'})
        fetch('')
        dispatch({type: 'ADD_ITEM', item})
    }
}