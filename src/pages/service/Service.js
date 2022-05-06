import React from 'react';
import './Service.css';
/*<a href="https://ibb.co/MScz9LR"><img src="https://i.ibb.co/XL7nVTz/2.jpg" alt="2" border="0"></a>
<a href="https://ibb.co/M77MYsx"><img src="https://i.ibb.co/BBBqXt5/3.jpg" alt="3" border="0"></a>
<a href="https://ibb.co/GRY4Dvf"><img src="https://i.ibb.co/DQcHFDP/4.jpg" alt="4" border="0"></a>
<a href="https://ibb.co/9ZjjKKx"><img src="https://i.ibb.co/bbnnww4/5.jpg" alt="5" border="0"></a>
<a href="https://ibb.co/FgLbrfh"><img src="https://i.ibb.co/yWcn9MN/6.jpg" alt="6" border="0"></a> */

const Service = ({service}) => {
    const {name,price,description,img}= service;
    return (
        <div className='service'>
         
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className='px-3'>{description}</p>
        </div>
    );
};

export default Service;