import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions'

class ItemInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {
                purchase_date: "",
                name: "",
                brand: "",
                size: "",
                cost: ""
            }
        }
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: {
                purchase_date: "",
                name: "",
                brand: "",
                size: "",
                cost: ""
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Purchase Date</label><input type="date" name="purchase_date" value={this.state.item.purchase_date} onChange={this.handleOnChange}></input><br />
                <label>Item Name</label><input type="text" name="name" value={this.state.item.name} onChange={this.handleOnChange}></input><br />
                <label>Brand</label><input type="text" name="brand" value={this.state.item.brand} onChange={this.handleOnChange}></input><br />
                <label>Size</label><input type="text" name="size" value={this.state.item.size} onChange={this.handleOnChange}></input><br />
                <label>Cost</label><input type="number" name="cost" value={this.state.item.cost} onChange={this.handleOnChange}></input><br />
                <input type="submit"></input>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect (null, mapDispatchToProps)(ItemInput)