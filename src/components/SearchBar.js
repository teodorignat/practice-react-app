import React from 'react';
import './SearchBar.css';

const SearchBar = ({filterByName}) => {
    return(
        <div className='pa2'>
            <input
                className='input'
                type='search'
                placeholder='Search...' 
                onChange={filterByName}
            />
        </div>
    );
}

export default SearchBar;