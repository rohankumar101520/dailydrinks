import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const orders = JSON.parse(localStorage.getItem('testorders'));
        // console.log(orders);
        this.setState({ orders });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                id: prevState.id + 1,
                status: "Added Successfully"
            }
        })
        if(localStorage.getItem('testorders')){

            // for (let i = 0; i < localStorage.length; i++){
            //     let key = localStorage.key(i);
            //     console.log(localStorage.getItem(key));
            //     var object = [JSON.parse(localStorage.getItem('testorders'))]
            // }

            var object = [JSON.parse(localStorage.getItem('testorders'))]
            object.push(this.state)
            // console.log(object);
            localStorage.setItem('testorders',JSON.stringify(object));
        }else{
            localStorage.setItem('testorders',JSON.stringify(this.state));
        }
    }

render() {
    console.log(this.state.orders)
    console.log(this.props.match.params.id)
    const formStyle ={ 
        maxWidth:"500px",
        margin: "0px auto"
    }
    return (
        <form onSubmit={this.handleFormSubmit} style={formStyle}>
            <h2>Edit Order</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Please Enter Drink Name"
                    className="form-control" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    required
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
                    required
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
            <Link className="btn btn-primary" to="/" >View Orders</Link>
        </form>
    )
    }
}

export default Form;