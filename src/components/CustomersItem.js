import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class CustomersItem extends Component {
    
    ulStyle = () =>{
        return{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '5px',
        listStyle:'none',
        backgroundColor:'lightblue',
        borderBottom: '1px dotted black'
        }
    }

    render() {
        return (
            <ul style={this.ulStyle()}>            
                <li>{this.props.customer.id}</li> 
                <li>{this.props.customer.type}</li>                     
                <li>{this.props.customer.email}</li>
                <li>{this.props.customer.address}</li>
                <li>{this.props.customer.buildings}</li>
                <div>
                    <button onClick={this.props.deleteCustomer.bind(this, this.props.customer.id)} style={editButton}>EDIT</button>
                    <button onClick={this.props.deleteCustomer.bind(this, this.props.customer.id)} style={deleteButton}>x</button>
                </div>
            </ul>
        )
    }
}

CustomersItem.propTypes = {
    customer: PropTypes.object.isRequired,
}

const deleteButton = {
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '3px',
    cursor: 'pointer'
}

const editButton = {
    backgroundColor: 'green',
    borderRadius: '50%',
    padding: '3px',
    cursor: 'pointer'
}

export default CustomersItem
