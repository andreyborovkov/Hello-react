import React, {Component} from 'react';
import Decrementor from './Decrementor';
import CounterDisplay from './CounterDisplay';
import Incrementor from './Incrementor';

class Counter extends Component{
    render(){
        return(
            <div>
                <Decrementor />
                <CounterDisplay />
                <Incrementor />
            </div>
        );
    }
}

export default Counter;