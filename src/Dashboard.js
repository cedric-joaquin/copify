import React, { Component } from 'react'
import { BarChartFill } from 'react-bootstrap-icons'
import TotalCard from './components/analytics/TotalCard'

export default class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAnalytics();
    }

    render() {
        console.log(this.props)
        return (
            <>
                <header class="navbar border-bottom pb-0">
                    <h1><BarChartFill size={30}/> Dashboard</h1>
                </header>
                <div class="container-fluid pt-3 pl-3">
                    <TotalCard total={this.props.analytics.total} itemCount={this.props.analytics.itemCount}/>
                </div>
            </>
        )
    }
}