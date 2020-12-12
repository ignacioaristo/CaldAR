import { Component } from 'react';
import customers from './mocks/customers.json';
import Customers from './components/Customers';
import Header from './components/layout/Header';

class App extends Component {
  state = {customers};

  //Delete Customer
  deleteCustomer = (id) =>{
    this.setState({customers: [...this.state.customers.filter(customer => customer.id !== id)]})
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Customers customers={this.state.customers} deleteCustomer={this.deleteCustomer}/>
    </div>
  )};
}

export default App;
