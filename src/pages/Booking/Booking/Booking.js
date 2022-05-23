import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://boiling-crag-29174.herokuapp.com/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h2>This is booking : {serviceId}</h2>
        </div>
    );
};

export default Booking;