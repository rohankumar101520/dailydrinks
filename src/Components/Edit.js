import React, { Component } from 'react';
 
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            notes: '',
            id: Math.random()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
 
handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
}

handleFormSubmit = (e) => {
    e.preventDefault();
    if(localStorage.getItem('testorders')){
        // console.log(this.state)
        // var object = []
        // object.push(this.state)
        localStorage.setItem('testorders',JSON.stringify(this.state));
    }else{
        // var object = [JSON.stringify(this.state)]
        localStorage.setItem('testorders',JSON.stringify(this.state));
    }
}

render() {
    const formStyle ={ 
        maxWidth:"500px",
        margin: "0px auto"
    }

    // console.log(this.state.orders);
    
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
        </form>
    )
}
}

export default Edit;