import React from "react";


export default class Counter extends React.Component{

    // componentDidUpdate(prevProp,prevState){
    componentDidUpdate(prevProp){
        if(this.props.count !== prevProp.count){
            console.log("component badal gya");
        }
    }

    componentWillUnmount(){
        console.log("component removed");
    }

    render(){
        return(
            <div>
                <h1>Count: {this.props.count}</h1>
            </div>
        )
    }
}









