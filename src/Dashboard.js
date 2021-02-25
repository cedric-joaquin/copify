import React, { Component } from 'react'
import TotalCard from './components/analytics/TotalCard'

export default class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAnalytics();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <TotalCard total={this.props.analytics.total} />
            </div>
        )
    }
}