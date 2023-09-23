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
            searchfield: '',
            sortby: 'default'
          }
        }
        
    
    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
    }

    handleSortBy = (event) => {
      this.setState({sortby: event.target.value})
    }

    render() {
      const { shoppingitems, searchfield, sortby }  = this.state;
      const filteredItems = shoppingitems.filter(item => {
        return item.itemName.toLowerCase().includes(searchfield.toLowerCase());
      });
      let sortBy = filteredItems;

      if (sortby !== 'default') {
        if (sortby === 'price') {
          sortBy = shoppingitems.sort((a,b) => a.price - b.price)
        }
        if (sortby === 'category') {
          sortBy = shoppingitems.sort((a,b) => {
            if (a.category < b.category) {
              return -1
            }
            if (a.category > b.category) {
              return 1
            }
            return 0;
          })
        }
        if (sortby === 'brand') {
          sortBy = shoppingitems.sort((a,b) => {
            if (a.brand < b.brand) {
              return -1
            }
            if (a.brand > b.brand) {
              return 1
            }
            return 0;
          })
        }

      } else {
        sortBy = shoppingitems.sort((a,b) => a.id - b.id);
      }
      
      return (
      <>
        <div className='container tc'>
            <div className='salesFunctions'>
              <SearchBar filterByName={this.onSearchChange}/>
              <SortingFn sortByFn={this.handleSortBy} />
              <h3 className='appTitle'>PC Part Online Shop</h3>
            </div>
            <ItemList items={(searchfield !== '') ? filteredItems : sortBy}/>  
        </div>
      </>
    );
  }
}


export default App;