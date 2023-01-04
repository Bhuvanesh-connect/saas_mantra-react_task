import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='Footer container-fluid'>
        <div className='container'>
            <div className='row content_row'>
                <div className='col-12 col-lg-5'>
                    
                    <h5 className='heading'>Opalin &#174;</h5>
                    <p className='description'>We're a completely remote company, working across twenty countries, with over 20,000 customers</p>
                    
                </div>
                <div className='col-12 col-lg-7'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 col-lg-4 mb-3 item_group'>
                            <h5 className='heading'>Info</h5>
                            <Link to='/getting_started'>Getting Started</Link>
                            <Link to='/resources'>Resources</Link>
                            <Link to='/design'>Design</Link>
                            <Link to='/tutorials'>Tutorials</Link>
                            <Link to='/pricing'>Pricing</Link>
                        </div>
                        <div className='col-12 col-sm-4 col-lg-4 mb-3 item_group'>
                            <h5 className='heading'>Support</h5>
                            <Link to='/documentation'>Documentation</Link>
                            <Link to='/requirements'>Requirements</Link>
                            <Link to='/license'>License</Link>
                            <Link to='/updates'>Updates</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                        <div className='col-12 col-sm-4 col-lg-4 mb-3 item_group'>
                            <h5 className='heading'>Connect</h5>
                            <Link to='/twitter'>Twitter</Link>
                            <Link to='/facebook'>Facebook</Link>
                            <Link to='/instagram'>Instagram</Link>
                            <Link to='/medium'>Medium</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='copyrights'>
                <p>HTML Template by UI/UX Assets - @2018,all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer