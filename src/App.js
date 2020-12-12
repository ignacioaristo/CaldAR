import { Component } from 'react';
import customers from './mocks/customers.json';
import Customers from './components/Customers';
import Header from './components/layout/Header';
import AddCustomer from './components/AddCustomer';
import {v4 as uuid} from "uuid"; 

class App extends Component {
  state = {customers};

  // Delete Customer
  deleteCustomer = (id) =>{
    this.setState({customers: [...this.state.customers.filter(customer => customer.id !== id)]})
  }

  // Add Customer
  addCustomer = ({id, type, email, address, buildings}) => {
    const newCustomer = {
      id: uuid(),
      type,
      email,
      address,
      buildings
    }
    this.setState({customers: [...this.state.customers, newCustomer]})
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Customers customers={this.state.customers} deleteCustomer={this.deleteCustomer}/>
      <AddCustomer addCustomer={this.addCustomer}/>
    </div>
  )};
}

export default App;
