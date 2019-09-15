// odpowiada za całość - wygląd licznika - zewnętrzny div
import React, { Component } from 'react';
// components
import Display from './Display';
import ButtonsPanel from './ButtonsPanel'

//css
import './Counter.css';



class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'counterValue': 0,
            'incremency': 1
        }
    }

    parentIncrementStep = (step) => {
        this.setState(() => {
            if (step > 0) {
                return {
                    'incremency': parseInt(step)
                }
            }
            else {
                alert("Zawartość można zwiększyć tylko o liczbę dodatnią")
            }

        })
    }

    parentIncrementCounter = () => {
        this.setState((prevState) => {
            return {
                'counterValue': prevState.counterValue + this.state.incremency
            }
        })
    }

    parentResetCounter = () => {
        this.setState((prevState) => {
            return {
                'counterValue': 0
            }
        })
    }

    render() {
        return (
            <div className='counter-panel'>
                <Display counterValue={this.state.counterValue} />
                <ButtonsPanel increment={this.parentIncrementCounter} reset={this.parentResetCounter} incrementStep={this.parentIncrementStep} />
            </div>
        )
    }
}

export default Counter