import { Component } from "react";
class ClassCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    Increment = () =>{
        this.setState({
            ...this.state,
            count:this.state.count +1
        })
        console.log("Count: ",this.state.count);
    }
    Decrement = () =>{
        this.setState({
            ...this.state,
            count:this.state.count -1
        })
        console.log("Count: ",this.state.count);
    }
    render() {
        return(
            <div>
                <h2>My First Class Componenet : {this.state.count}</h2>
                <p>{this.props.name} - {this.props.id}</p>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
};
export default ClassCom;