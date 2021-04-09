import React, { Component } from 'react';
import Avatar from './Avatar'
import 'tachyons';
import './Avatar.css'
import { render } from 'react-dom';

class Avatarheading extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome to Avatar World!"
        }
    }

    namechange() {
        this.setState = ({
            name: 'Welcome to My World!'
        })
    }
}

const Avat = (props) => {

    const avatarlist = [
        {
            id: '1',
            name: 'Shivam',
            work: 'Web Developer'
        },

        {
            id: '2',
            name: 'Rudra',
            work: 'App Developer'
        },

        {
            id: '3',
            name: 'Kartik',
            work: 'Frontend Developer'
        },

        {
            id: '4',
            name: 'Payal',
            work: 'Backend Developer'
        }
    ]

    const arraycard = avatarlist.map((avatarind, i) => {
        return <Avatar key={i}
            id='i' name={avatarlist[i].name} work={avatarlist[i].work} />
    })


    return <div className="mainpg">
        <h1 className="tc">Welcome to Avatar World!</h1>
        {arraycard}
        <button onClick={() => this.namechange()}>Subscribe</button>
    </div>
}

export default Avat;