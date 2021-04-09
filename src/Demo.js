import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
    return <div className="maindiv">
        <h1>Hello {props.n}</h1>
        <p>This is Shivam!</p>
    </div>
}

// class Demo extends Component {
//     render() {
//         return <div className="maindiv">
//             <h1>Hello {this.props.n}</h1>
//             <p>This is Shivam!</p>
//         </div>
//     }
// }

export default Demo;
