import React, { Component } from 'react'

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
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input 
                    type='text' 
                    name='type' 
                    placeholder='Type of client' 
                    value={this.state.type} 
                    onChange={this.onChange}
                />
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    value={this.state.email} 
                    onChange={this.onChange}
                />
                <input 
                    type='text' 
                    name='address' 
                    placeholder='Address' 
                    value={this.state.address} 
                    onChange={this.onChange}
                />
                <input 
                    type='text' 
                    name='buildings' 
                    placeholder='Buildings' 
                    value={this.state.buildings} 
                    onChange={this.onChange}/>
                <input type='submit' onClick={this.props.AddCustomer} value='Send' />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}


export default AddCustomer
