import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id,name,price,description,img}= service;
    return (
        <div className='service pb-3'>
         
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className='px-3'>{description}</p>
           <a href={`/booking/${_id}`}> <button className='btn btn-warning'>Book {name.toLowerCase()}</button></a>
        </div>
    );
};

export default Service;