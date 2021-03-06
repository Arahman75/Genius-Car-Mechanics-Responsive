import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        //before
        // fetch("services.json")
        //new mongodb server
        fetch('https://boiling-crag-29174.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services'>
            <h2 className='text-primary  mt-5'>Our Services</h2>
 <div className='service-container'>
         
         {
            services.map(service => <Service
           key={service.id}
           service={service}
            ></Service>)
         }
     </div>
       </div>
    );
};

export default Services;