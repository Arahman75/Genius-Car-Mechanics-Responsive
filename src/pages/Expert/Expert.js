import React from 'react';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            
            <img style={{height:'300px', width:'300px'}} src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>-{expertize}-</h5>
        </div>
    );
};

export default Expert;