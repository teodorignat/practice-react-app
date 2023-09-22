import React from 'react';
import './SortingFn.css'

const SortingFn = () => {
    return(
        <div className='sorting-wrapper'>
            <p>Sort by:</p>
            <input type="radio" id='price' name='sort-by' />
            <label htmlFor="price">Price</label>
            <input type="radio" id='category' name='sort-by' />
            <label htmlFor="category">Category</label>
            <input type="radio" id='brand' name='sort-by' />
            <label htmlFor="brand">Brand</label>
        </div>
    );
}

export default SortingFn;