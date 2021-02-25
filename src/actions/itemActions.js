export const fetchItems = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_INVENTORY'})
        fetch('http://localhost:4000/items')
            .then(resp => resp.json())
            .then(data => dispatch({type:'LOAD_INVENTORY', items: data.items}))
    }
}

export const fetchAnalytics = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANALYTICS'})
        fetch('http://localhost:4000/items')
        .then(resp => resp.json())
        .then(data => dispatch({type:'LOAD_ANALYTICS', analytics: data.analytics}))
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
            window.location.replace(`http://localhost:3000/inventory/${item.id}`);
            dispatch({type: 'ADD_ITEM', item})
        })
    }
}

export const editItem = (item) => {
    return (dispatch) => {
        dispatch({type: 'EDITING_ITEM'})
        fetch(`http://localhost:4000/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                purchase_date: item.purchase_date,
                name: item.name,
                brand: item.brand,
                size: item.size,
                cost: item.cost,
                id: item.id
            })
        })
        .then(resp => resp.json())
        .then(item => {
            dispatch({type: 'EDIT_ITEM', item})
        })
    }
}

export const deleteItem = (item) => {
    return (dispatch) => {
        dispatch({type: 'DELETING_ITEM'})
        fetch(`http://localhost:4000/items/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: item.id
            })
        })
        .then( () => {
            window.location.replace('http://localhost:3000/inventory');
            dispatch({type: 'DELETE_ITEM', id: item.id});
        })
    }
}