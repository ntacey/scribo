import React from 'react';
import { Link } from 'react-router';

class PageNotFound extends React.Component {
  constructor(props) {
    
  }
  
  render () {
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to mainpage </Link>
    </div>
  };
};

export default NotFoundPage;