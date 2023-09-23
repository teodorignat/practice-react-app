import React from 'react';
import Item from './Item';
// import { shoppingItems } from '../shoppingitems.js';
import './ItemList.css';

const ItemList = ({items}) => {
    return(
        <div className='item-wrapper bg-white br4'>
            <div className="items">
                {   
                    items.map((item, i) => {
                        return(
                            <Item
                                key={i}
                                imgsrc={items[i].imgsrc}
                                itemName={items[i].itemName}
                                brand={items[i].brand}
                                category={items[i].category}
                                stock={items[i].stock}
                                price={items[i].price + '$'}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ItemList;