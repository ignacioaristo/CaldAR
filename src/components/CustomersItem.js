import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FaPen, FaTrash} from "react-icons/fa";
import '../styles/CustomersItems.css'

export class CustomersItem extends Component {
    
    state = {...this.props.customer, isEditing: false};

    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveChanges = () => {
        this.toggleEdit();
        this.props.updateCustomer(this.state);
    }
    render() {

    if (this.state.isEditing) {
        return (
            <ul className="ulStyle">
                <input 
                    type='number' 
                    name='id' 
                    value={this.state.id} 
                    onChange={this.onChange}
                />
                <input 
                    type='text' 
                    name='type' 
                    value={this.state.type} 
                    onChange={this.onChange}
                />
                <input 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                />
                <input 
                    type='text' 
                    name='address' 
                    value={this.state.address} 
                    onChange={this.onChange}
                />
                <input 
                    type='text' 
                    name='buildings' 
                    value={this.state.buildings} 
                    onChange={this.onChange}
                />
                <div>
                    <button onClick={this.saveChanges} className="actionButtons">SAVE</button>
                    <button onClick={this.toggleEdit} className="actionButtons">CANCEL</button>
                </div>
            </ul>
        )
    }    
 
        return (
        <ul className="ulStyle">   
            <li className="liStyle">{this.props.customer.id}</li> 
            <li className="liStyle">{this.props.customer.type}</li>                     
            <li className="liStyle">{this.props.customer.email}</li>
            <li className="liStyle">{this.props.customer.address}</li>
            <li className="liStyle">{this.props.customer.buildings}</li>
            <div className="liStyle">
                <button onClick={this.toggleEdit} className="actionButtons"><FaPen size={20}/></button>
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
