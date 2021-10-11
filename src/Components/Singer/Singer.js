import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import './Singer.css'

const Singer = (props) => {
    // console.log(props);
    const element = <FontAwesomeIcon className='icon' icon={faPlus} />
    const {img, name, age, budget, band, country} = props.singer;
    return (
        <div className='singers'>
            <div className='singer'>
                <img className='img' src={img} alt="" />
               <h2 className='title'>Name: {name}</h2>
               <h3>Age: {age}</h3>
               <h3>Band: {band}</h3>
               <h3>Country: {country}</h3>
               <h2 className='budget'>Budget: ${budget}</h2>
               

               <button onClick={()=> props.handleAddList(props.singer)} className='btn btn-danger'>{element} Hire</button>
            </div>
        </div>
    );
};

export default Singer;