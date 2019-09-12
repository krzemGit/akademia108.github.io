// odpowiada za element pokazujący liczbę
import React, { Component } from 'react';  //drugim sposobem 

class Display extends Component {   // krócej niż w poprzednim projekcie, bo pobraliśmy także komponenty
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='display'>
                Stan licznika:
            <span className='display__val'> {this.props.counterValue}</span>
            </div>
        )
    }
}

export default Display;