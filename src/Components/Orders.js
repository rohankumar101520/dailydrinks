import React, { Component } from 'react';
// import OrderItem from './OrderItem';

class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        const orders = JSON.parse(localStorage.getItem('orders'));
        this.setState({ orders });
    }
    
    edit = (id) => {
        console.log(id);
    }

    delete = (id) => {
        // console.log(id);
        this.setState({
            orders: [...this.state.orders.filter(order => order.id !== id)]
        });
        localStorage.setItem('orders',JSON.stringify(this.state.orders));
    }

    render() {
        console.log(this.state.orders);
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Drink</th>
                        <th scope="col">Price</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // this.state.orders.map((order) => (
                        //     <OrderItem key={order.id} order={order} delete={this.delete} edit={this.edit} />
                        // ))
                    }
                </tbody>
            </table>
        );
    }
}

export default Orders;