import 'react';
import { render } from 'react-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);    
  }
    
  //TODO: pass in input fields through props or login-box should get its own component.  
  render() {
    <div class="login-box" id="login-box">
      <input autocomplete="off" type="text" class="email" id="email" placeholder="email">
      <input type="password" class="password" id="password" placeholder="password">
      <br>
      <br> 
      
      <div class="login-buttons">
        <button type="button" class="btn btn-login" id="login-btn">Login</button>
        <button type="button" class="btn btn-default" id="sign-up-btn">Sign up</button>
      </div>
    </div>
  }
}

export default MainPage;