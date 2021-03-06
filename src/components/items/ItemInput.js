import React, { Component } from 'react';

export default class ItemInput extends Component {

    constructor(props) {
        super(props);
        
        
        if (this.props.items) {
            const filteredItem = this.props.items.filter(item => item.id == this.props.match.params.itemId)
            let item = {...filteredItem[0]}
            this.state = {
                item,
                editingItem: true
            }
        } else {
            this.state = {
                item: {
                    purchase_date: "",
                    name: "",
                    brand: "",
                    size: "",
                    cost: ""
                },
                addingItem: true
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
        if (this.state.addingItem) {
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

        } else if (this.state.editingItem) {
            this.props.editItem(this.state.item)
        }
    }

    render() {
        return (
            <div class="container-fluid pt-1 pl-3">
                <div class="card" style={{width: "25rem"}}>
                    <div class="card-body">
                        <form onSubmit={this.handleOnSubmit}>
                            <label>Purchase Date</label><input type="date" name="purchase_date" value={this.state.item.purchase_date} onChange={this.handleOnChange}></input><br />
                            <label>Item Name</label><input type="text" name="name" value={this.state.item.name} onChange={this.handleOnChange}></input><br />
                            <label>Brand</label><input type="text" name="brand" value={this.state.item.brand} onChange={this.handleOnChange}></input><br />
                            <label>Size</label><input type="text" name="size" value={this.state.item.size} onChange={this.handleOnChange}></input><br />
                            <label>Cost</label><input type="number" name="cost" value={this.state.item.cost} onChange={this.handleOnChange}></input><br />
                            <input type="submit" class="btn btn-primary"></input>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
