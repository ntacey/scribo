import 'react';
import { render } from 'react-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);    
  }
    
  render() {
    <div class="note-box" id="note-box">
      <textarea class="note-body" id="note-body"></textarea>
    </div>
    <div class="button-box" id="button-box">
      <input type="text" id="new-tag" class="new-tag" placeholder="new tag">
        <div class="divider"></div>
        <div id="note-tag-box"></div>
        <button class="done-btn" id="done-btn">Finish note</button>
    </div>
  }
}

export default MainPage;