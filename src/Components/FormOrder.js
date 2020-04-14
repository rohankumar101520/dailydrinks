import React, { Component } from 'react';
 
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {
                    name: 'Drink 1',
                    price: '50',
                    notes: 'somethinh',
                    id: 1
                },
                {
                    name: 'Drink 2',
                    price: '60',
                    notes: 'something',
                    id: 2
                },
                {
                    name: 'Drink 3',
                    price: '70',
                    notes: 'something 2',
                    id: 3
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
 
handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
}

handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('orders',JSON.stringify(this.state.orders));
}

render() {
    const formStyle ={ 
        maxWidth:"500px",
        margin: "0px auto"
    }

    // console.log(this.state.orders);
    
    return (
        <form onSubmit={this.handleFormSubmit} style={formStyle}>
            <h2>Add Order</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Please Enter Drink Name"
                    className="form-control" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="number" 
                    name="price"
                    placeholder="Please Enter Price"
                    className="form-control" 
                    value={this.state.price} 
                    onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <textarea 
                    name="notes"
                    placeholder="Add Notes (Optional)"
                    className="form-control" 
                    value={this.state.notes} 
                    onChange={this.handleChange} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
}

export default Form;