import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <h2>this is not found</h2>
            <img src={image} alt="" />
            <br />
            <br />
            <a href='/'><button>Go back</button></a>
        </div>
    );
};

export default NotFound;