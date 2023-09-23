import React from 'react';
import './SortingFn.css'

const SortingFn = ({sortByFn}) => {
    return(
        <div className='sorting-wrapper'>
            <p>Sort by:</p>
            <input 
                type="radio"
                id='default'
                name='sort-by'
                value='default'
                onChange={sortByFn}
            />
            <label htmlFor="default">Default</label>
            <input 
                type="radio"
                id='price'
                name='sort-by'
                value='price' 
                onChange={sortByFn}
            />
            <label htmlFor="price">Price</label>
            <input 
                type="radio"
                id='category'
                name='sort-by'
                value='category' 
                onChange={sortByFn}
            />
            <label htmlFor="category">Category</label>
            <input
                type="radio"
                id='brand'
                name='sort-by'
                value='brand'
                onChange={sortByFn} 
            />
            <label htmlFor="brand">Brand</label>
        </div>
    );
}

export default SortingFn;