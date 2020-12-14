import React, { Component } from 'react';
import '../styles/AddCustomers.css';

export class AddCustomer extends Component {
    state = {
        id: '',
        type: '',
        email: '',
        address: '',
        buildings: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCustomer(this.state);
        this.setState(
            {
                id:'',
                type:'',
                email: '',
                address: '',
                buildings: ''
            }
        );
    }

    render() {
        return (
            <div>
                <h2>Add Customer Form:</h2>
                <form onSubmit={this.onSubmit} className="formStyle">
                    <input 
                        className="inputStyle"
                        type='text' 
                        name='type' 
                        placeholder='Type of client' 
                        value={this.state.type} 
                        onChange={this.onChange}
                    />
                    <input 
                        className="inputStyle"
                        type='email' 
                        name='email' 
                        placeholder='Email' 
                        value={this.state.email} 
                        onChange={this.onChange}
                    />
                    <input 
                        className="inputStyle"
                        type='text' 
                        name='address' 
                        placeholder='Address' 
                        value={this.state.address} 
                        onChange={this.onChange}
                    />
                    <input 
                        className="inputStyle"
                        type='text' 
                        name='buildings' 
                        placeholder='Buildings' 
                        value={this.state.buildings} 
                        onChange={this.onChange}/>
                    <input className="inputStyle" type='submit' onClick={this.props.AddCustomer} value='Send' />
                </form>
            </div>
        )
    }
}

export default AddCustomer
