import React, { Component } from 'react';
import './App.css';
import ItemList from '../components/ItemList'
import SearchBar from '../components/SearchBar'
import SortingFn from '../components/SortingFn'
import { shoppingItems } from '../shoppingitems';


class App extends Component {
    constructor() {
        super();
        this.state = {
            shoppingitems: shoppingItems,
            searchfield: ''
          }
        }
        
    
    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
    }

    render() {
      const { shoppingitems, searchfield }  = this.state;
      const filteredItems = shoppingitems.filter(item => {
        return item.itemName.toLowerCase().includes(searchfield.toLowerCase());
      })

      return (
      <>
        <div className='container tc'>
            <div className='salesFunctions'>
              <SearchBar filterByName={this.onSearchChange}/>
              <SortingFn />
              <h3 className='appTitle'>PC Part Online Shop</h3>
            </div>
            <ItemList items={filteredItems}/>  
        </div>
      </>
    );
  }
}


export default App;