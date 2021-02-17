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
        fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                purchase_date: item.purchase_date,
                name: item.name,
                brand: item.brand,
                size: item.size,
                cost: item.cost
            })
        })
        .then(resp => resp.json())
        .then(item => {
            dispatch({type: 'ADD_ITEM', item})
        })
    }
}