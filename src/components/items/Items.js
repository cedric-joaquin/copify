import React, { Component } from 'react';
import Item from './Item.js';
import ItemInput from './ItemInput'
import { Route, Link, Switch } from 'react-router-dom'

export default class Items extends Component {

    render() {
        const items = this.props.items.map(item => {
                return (
                    <tr>
                        <td>{item.purchase_date}</td>
                        <td>
                            <Link to={`/inventory/${item.id}`}>{item.name}</Link></td>
                        <td>{item.cost}</td>
                    </tr>
                )
            })
        
        return (
            <>
            <div class="pt-3 mb-3 border-bottom">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Purchase Date</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
                <Switch>
                    <Route exact path='/inventory/new'>
                        <ItemInput addItem={this.props.addItem} />
                    </Route>
                    <Route exact path={'/inventory/:itemId'} render={routerProps => <Item {...routerProps} items={this.props.items} deleteItem={this.props.deleteItem} addItem={this.props.addItem} editItem={this.props.editItem}
                    editItemClicked={false}/> }/>
                    <Route path='/inventory/:itemId/edit' render={routerProps => <ItemInput {...routerProps} items={this.props.items} editItem={this.props.editItem}/> }/>
                </Switch>
            </>
        )
    }
}