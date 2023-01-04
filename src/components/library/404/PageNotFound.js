import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='PageNotFound'>
        <div>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link to='/home' className='btn btn-primary'> Return to HomePage</Link>
        </div>
    </div>
  )
}

export default PageNotFound