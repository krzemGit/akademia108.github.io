// odpowiada za buttony i akcje 
import React, { Component } from 'react';
import './ButtonsPanel.css'

class ButtonsPanel extends Component {
    constructor(props) {
        super(props);
    }

    counterIncrement = () => {
        this.props.increment();
    }

    counterReset = () => {
        this.props.reset();
    }

    counterIncremency = () => {
        let step = this._inputStep.value
        this.props.incrementStep(step)
    }

    render() {
        return (
            <div className='button-panel'>
                <button onClick={this.counterIncrement}>Zwiększ wartość licznika</button>
                <button onClick={this.counterReset}>Resetuj</button>
                <div class="incremency" >Zwiększ wartość o: <input type="number" class="incremency" placeholder="1" ref={(data) => { this._inputStep = data }} onChange={this.counterIncremency} /></div>
            </div>
        )
    }
}

export default ButtonsPanel