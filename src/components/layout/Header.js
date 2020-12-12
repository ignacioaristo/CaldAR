import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={{textAlign:'center', backgroundColor:'lightblue', textDecoration: 'underline'}}>Customers</h1>
            <ul style={headerStyle}>
                <li>ID Number</li>
                <li>Type of Client</li>
                <li>Email</li>
                <li>Address</li>
                <li>Buildings</li>
                <li>Action</li>
            </ul>
        </header>
    )
}

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyle:'none',
    backgroundColor:'lightblue',
    fontWeight: 'bold'
}

export default Header