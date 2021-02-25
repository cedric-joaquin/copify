import React, { Component } from 'react'

export default class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAnalytics();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Inventory Total: ${`${this.props.analytics.total}`}
            </div>
        )
    }
}