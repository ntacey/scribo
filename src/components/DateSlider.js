/*
 * 2017-07-23
 * 
 * DateSlider dumb component that represents slider tool user uses to find notes in a date range.
 * Obtains values for start and end dates from initial store.
 * TODO: figure out which smart component will pass in props. since both NoteList
 *       and MainPage create this component, might have to set props in both
 * When these values get changed, action creator will trigger dateSeachReducer.
 * This should bind to LeftBox. 
 *
 */

'use strict';

import 'react';
import DateSeparator from './DateSeparator';

const DateSlider = (props) => {
  return(
    <div class="dateslider" id="dateslider">
      <p>Notes between dates:</p>
      <div id="slider-holder">
        <div id="slider"></div>
      </div>
      <DateSeparator defaultStartDate={ this.props.defaultStartDate } endDate={ this.props.defaultEndDate } />
    </div>  
  )
};

export default DateSlider;