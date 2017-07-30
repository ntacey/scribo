/*
 * 2017-07-30 
 *
 * View for missing page
 * Currently a functional stately component but might convert to stateful if it
 * needs to perform additional redirect logic. 
 *
 */

import React from 'react';
import { Link } from 'react-router';

const PageNotFound = (props) => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to mainpage </Link>
    </div>
  )
};

export default NotFoundPage;