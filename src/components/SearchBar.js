/*
 * 2017-07-23
 * 
 * SearchBar that user looks for notes based on input tag names
 *
 */

import 'react'

class SearchBar extends React.components {
  constructor(props) {
  
  }
  
  handleKeyPress() {
    if (!e) e = window.event;
    const keyCode = e.keyCode || e.which;
    // 13 is code for 'ENTER'
    if (keyCode == '13') {
       //call action here       
    }
  }
  
  // TODO: enter in value to pass into handleKeyPress
  render () {
    <input type="text" class="searchbar" id="searchbar" placeholder="Search for notes" onKeyPress={this.handleKeyPress}>  
  }
};
  
export default SearchBar;