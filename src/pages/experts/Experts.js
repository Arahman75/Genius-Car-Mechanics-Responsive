import React from 'react';
import mechanic1 from '../../images/mechanic/m1.jpg';
import mechanic2 from '../../images/mechanic/m2.jpg';
import mechanic3 from '../../images/mechanic/m3.jpg';
import mechanic4 from '../../images/mechanic/m4.jpg';
import mechanic5 from '../../images/mechanic/m5.jpg';
import mechanic6 from '../../images/mechanic/m6.jpg';
import Expert from '../Expert/Expert';

const experts =[
    {
      img:mechanic1,
      name:"Andrew Smith" ,
      expertize:"Engin Expert" 
    },
    {
        img:mechanic2,
        name:"John Anderson" ,
        expertize:"Polish Expert" 
      },
      {
        img:mechanic3,
        name:"Zakaria Smith" ,
        expertize:"ByChicle Expert" 
      },
      {
        img:mechanic4,
        name:"Adam Smith" ,
        expertize:"Coloring Expert" 
      },
      {
        img:mechanic5,
        name:"Ema Wordson" ,
        expertize:"Fashion Expert" 
      },
      {
        img:mechanic6,
        name:"Sakib Andrew" ,
        expertize:"Cricket Expert" 
      }
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary mt-5'>Our Experts</h2>
           <div className='row'>
           {
                experts.map(expert=><Expert
                key={expert.name}
                expert={expert}
                ></Expert>)
            }
           </div>
        </div>
    );
};

export default Experts;