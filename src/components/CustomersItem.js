import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FaPen, FaTrash} from "react-icons/fa";

export class CustomersItem extends Component {
    
    ulStyle = () =>{
        return{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '5px',
        listStyle:'none',
        borderBottom: '1px solid #e3e2e4'
        }
    }

    liStyle = () => {
        return{
            width: '16%',
            textAlign: 'center',
        }
    }

    render() {
        return (
        <ul style={this.ulStyle()}>   
            <li style={this.liStyle()}>{this.props.customer.id}</li> 
            <li style={this.liStyle()}>{this.props.customer.type}</li>                     
            <li style={this.liStyle()}>{this.props.customer.email}</li>
            <li style={this.liStyle()}>{this.props.customer.address}</li>
            <li style={this.liStyle()}>{this.props.customer.buildings}</li>
            <div style={this.liStyle()}>
                <button style={actionButtons}><FaPen size={20}/></button>
                <button onClick={this.props.deleteCustomer.bind(this, this.props.customer.id)} style={actionButtons}><FaTrash size={20}/></button>
            </div>
        </ul>
        )
    }
}

CustomersItem.propTypes = {
    customer: PropTypes.object.isRequired,
}

const actionButtons = {
    cursor: 'pointer',
    color: 'disable',
    margin: '10px',
    color: '#242e3e',
    border: 'none',
    backgroundColor: 'white'
}

const boxStyle = {
    border: '3px solid black'
}

export default CustomersItem
