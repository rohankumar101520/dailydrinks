import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            notes: '',
            id: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    object = [];
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                id: prevState.id + 1,
                status: "Added Successfully"
            }
        })
        if(localStorage.getItem('testorders')){
            this.object = [];
            for(var i = 0; i < (JSON.parse(localStorage.getItem('testorders'))).length; i++) {
                this.object.push((JSON.parse(localStorage.getItem('testorders')))[i]);
            }
            this.object.push(this.state)
            localStorage.setItem('testorders',JSON.stringify(
                this.object
            ));
        }else{
            localStorage.setItem('testorders',JSON.stringify([this.state]));
        }
    }

render() {
    const formStyle ={ 
        maxWidth:"500px",
        margin: "0px auto"
    }
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
            <p className="msg msg-success">{ this.state.status }</p>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-primary" to="/" >View Orders</Link>
        </form>
    )
    }
}

export default Form;