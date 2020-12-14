import React from 'react';
import '../../styles/Header.css';

function Header() {
    return (
        <header>
            <h1 className="TitleTitleStyle">Customers</h1>
            <ul className="headerTitleStyle">
                <li className="liStyle">ID Number</li>
                <li className="liStyle">Type of Client</li>
                <li className="liStyle">Email</li>
                <li className="liStyle">Address</li>
                <li className="liStyle">Buildings</li>
                <li className="liStyle">Action</li>
            </ul>
        </header>
    )
}

export default Header