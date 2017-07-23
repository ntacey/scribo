/*
 * 2017-07-23
 * 
 * NoteTag represents all displayed tags
 * 
 */

'use strict';

import 'react';

class NoteTag extends React.component {
  constructor(props) {
    this.props.color;
  }
  
  render() {
    <button class='note-tag' style='background: { this.props.color }'></button>
  }
};

export default DateSlider;