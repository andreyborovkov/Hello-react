import React, {Component} from 'react';
import Decrementor from './Decrementor';
import CounterDisplay from './CounterDisplay';
import Incrementor from './Incrementor';

class Counter extends Component{
    constructor(){
        super();
        this.state = {current: 42};
    }
    increment = () => {
        //this.state.current = this.state.current + 1;
        this.setState({current: this.state.current + 1})
    }
    decreament = () => {
        //this.state.current = this.state.current + 1;
        this.setState({current: this.state.current - 1})
    }
    render(){
        return(
            <div>
                <Decrementor decrease={this.decreament}/>
                <CounterDisplay current={this.state.current}/>
                <Incrementor increase={this.increment}/>
            </div>
        );
    }
}

export default Counter;