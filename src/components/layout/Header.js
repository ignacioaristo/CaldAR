import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={TitleTitleStyle}>Customers</h1>
            <ul style={headerTitleStyle}>
                <li style={liStyle}>ID Number</li>
                <li style={liStyle}>Type of Client</li>
                <li style={liStyle}>Email</li>
                <li style={liStyle}>Address</li>
                <li style={liStyle}>Buildings</li>
                <li style={liStyle}>Action</li>
            </ul>
        </header>
    )
}

const headerTitleStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '5px',
    listStyle:'none',
    borderBottom: '1px solid #e3e2e4',
    fontWeight: 'bold',
    color: '#f76723',
    fontFamily: 'San Francisco, Helvetica, Arial, san-serif'
    
}

const TitleTitleStyle = {
    color: 'white',
    backgroundColor: '#f76723',
    padding: '40px 0 40px 40px',
    fontWeight: '100',
    fontFamily: 'San Francisco, Helvetica, Arial, san-serif'
    
}

const liStyle = {
    width: '16%',
    textAlign: 'center'
}


export default Header