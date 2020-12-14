import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FaPen, FaTrash} from "react-icons/fa";
import '../styles/CustomersItems.css'

export class CustomersItem extends Component {
    render() {
        return (
        <ul className="ulStyle">   
            <li className="liStyle">{this.props.customer.id}</li> 
            <li className="liStyle">{this.props.customer.type}</li>                     
            <li className="liStyle">{this.props.customer.email}</li>
            <li className="liStyle">{this.props.customer.address}</li>
            <li className="liStyle">{this.props.customer.buildings}</li>
            <div className="liStyle">
                <button className="actionButtons"><FaPen size={20}/></button>
                <button onClick={this.props.deleteCustomer.bind(this, this.props.customer.id)} className="actionButtons"><FaTrash size={20}/></button>
            </div>
        </ul>
        )
    }
}

CustomersItem.propTypes = {
    customer: PropTypes.object.isRequired,
}

export default CustomersItem
