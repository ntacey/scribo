import 'react';

const DateSlider = (props) => {
  return(
    <input type="text" class="date-input start-date" id="start-date"> &nbsp;-&nbsp;
    <input type="text" class="date-input end-date" id="end-date">
  )
};

export default DateSlider;