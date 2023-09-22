import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
    <>
        <div className='wrapper' >
            <img 
                className='itemPhoto'
                src= {props.imgsrc}
                alt="nophoto" 
                />
            <div>
                <div className='info'>
                    <h3 className='itemName'>{props.itemName}</h3>
                    <h3 className='brand'>{props.brand}</h3>
                    <h3 className='category'>{props.category}</h3>
                    <h3 className='stock'
                        style={{color: (props.stock) ? 'green' : 'red'}}
                    >
                        {(props.stock) ? 'In stock' : 'Out of stock'}
                    </h3>
                </div>
                <div className='buy-wrapper'>
                    <div className='price-wrapper'>
                        <h1 className='price'>{props.price}</h1>
                    </div>
                    <div>
                        <button className="addToCartBtn grow">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Item;