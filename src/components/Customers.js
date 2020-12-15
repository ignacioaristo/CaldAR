import { Component } from 'react';
import CustomersItem from './CustomersItem';
import PropTypes from 'prop-types';


class Customers extends Component {
  render() {
    return this.props.customers.map((customer) => (
        <CustomersItem key={customer.id} customer={customer} deleteCustomer={this.props.deleteCustomer} updateCustomer={this.props.updateCustomer}/>
    ))}
};

Customers.propTypes = {
    customers: PropTypes.array.isRequired,
}

export default Customers;
