import React, { Component } from 'react';

class OrderItem extends Component {
    render() { 
        const { id, name, price, notes } = this.props.order;
        return ( 
        <tr>
            <th scope="row">{ id }</th>
            <td>{ name }</td>
            <td>{ price }</td>
            <td>{ notes }</td>
            <td>
                <button className="btn btn-primary" onClick={this.props.edit.bind(this, id)} >Edit</button>  
                <button className="btn btn-danger" onClick={this.props.delete.bind(this, id)}>Delete</button>
            </td>
        </tr>
        );
    }
}

export default OrderItem;