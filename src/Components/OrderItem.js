import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                {/* <button className="btn btn-primary" onClick={this.props.edit.bind(this, id)} >Edit</button>   */}
                <Link className="btn btn-primary" to={{pathname: `/edit/${ id }`, id: id}} >Edit</Link>
                <button className="btn btn-danger" onClick={this.props.delete.bind(this, id)}>Delete</button>
            </td>
        </tr>
        );
    }
}

export default OrderItem;