import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItem';
class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        const orders = JSON.parse(localStorage.getItem('testorders'));
        this.setState({ orders });
    }

    delete = (id) => {
        // console.log(id);
        this.setState({
            orders: [...this.state.orders.filter(order => order.id !== id)]
        }, this.dSetState);
    }

    dSetState = () =>{
        localStorage.setItem('testorders',JSON.stringify(this.state.orders));
    }

    render() {
        // console.log(this.state.orders);
        if(this.state.orders){
            return (
                <div className="order">
                    <h2>Orders List</h2>
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
                        {this.state.orders.length >= 1 ? (
                            <tbody>
                            {
                                this.state.orders.map((order) => (
                                    <OrderItem key={order.id} order={order} delete={this.delete} edit={this.edit} />
                                ))
                            }
                        </tbody>
                        ):(
                            <tbody>
                                <tr>No Orders Found</tr>
                            </tbody>
                        )}
                    </table>
                    <Link to="/form" className="btn btn-primary">Add Order</Link>
                </div>
            );
        }else{
            return( 
                <div>
                    <p>No orders Found</p>
                    <Link to="/form" className="btn btn-primary">Add Order</Link>
                </div>
            )
        }
    }
}
export default Orders;