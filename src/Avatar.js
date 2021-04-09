import React from 'react';
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
    return <div className="avatarsty ma4 bg-light-yellow dib grow pa50">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <h1 className="tc"> {props.name}</h1>
        <p className="tc"> {props.work} </p>
    </div >
}

export default Avatar;