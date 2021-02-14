export const fetchItems = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_INVENTORY'})
        fetch('localhost:4000/items')
            .then(resp => resp.json())
            .then(items => dispatch({type:'ADD_ITEMS', items}))
    }
}