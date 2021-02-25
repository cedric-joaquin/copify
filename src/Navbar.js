import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">

            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to={`/`} class='nav-link'>Copify</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/dashboard`} class='nav-link'>Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/inventory`} class='nav-link'>Inventory</Link>
                </li>
                <li class="nav-item">
                </li>
                <li class="nav-item">
                </li>
                <li class="nav-item">
                </li>
            </ul>
            </div>
      </nav>
    )
}

export default Navbar