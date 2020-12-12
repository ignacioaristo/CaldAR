import React from 'react';

function Header() {
    return (
        <header>
            <h1 style={{textAlign:'center', backgroundColor:'lightblue', textDecoration: 'underline'}}>Customers</h1>
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
    backgroundColor:'lightblue',
    borderBottom: '2px solid black',
    fontWeight: 'bold'
    
}

const liStyle = {
    width: '16%',
    textAlign: 'center'
}


export default Header