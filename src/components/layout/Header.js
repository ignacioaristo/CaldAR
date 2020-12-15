import React from 'react';
import '../../styles/Header.css';

function Header() {
    return (
        <header>
            <h1 className="TitleTitleStyle">Customers</h1>
            <ul className="headerTitleStyle">
                <li className="liTitleStyle">ID Number</li>
                <li className="liTitleStyle">Type of Client</li>
                <li className="liTitleStyle">Email</li>
                <li className="liTitleStyle">Address</li>
                <li className="liTitleStyle">Buildings</li>
                <li className="liTitleStyle">Action</li>
            </ul>
        </header>
    )
}

export default Header