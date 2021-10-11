// import React from 'react';
import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Band.css';

const Band = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( () =>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setSingers(data))

    }, []);

    const handleAddList = singer =>{
        if(cart.includes(singer)){
            
        }
        else{
            const newCart = [...cart, singer];
        // newCart.map(cart =>console.log(cart));
        setCart(newCart);
        }
        
    };
    return (
        <div>
            <div className='band'>
                <div className='band-container'>
                    {/* <h2>Singers: {singers.length}</h2> */}
                    {
                        singers.map(singer => <Singer 
                            key={singer.name}
                            singer={singer}
                            handleAddList={handleAddList}
                            ></Singer>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                    
                </div>
            </div>
        </div>
    );
};

export default Band;