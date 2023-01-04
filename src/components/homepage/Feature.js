import React from 'react'

function Feature(props) {
  return (
    <div className='col-12 col-sm-6 col-md-3 col-lg-3'>
        <div className='feature'>
            <div className='grey_circle'>
                <i style={{fontSize:"34px",fontWeight:"700"}}className={props.data.icon}></i>
            </div>
            <h4 className='heading'>{props.data.name}</h4>
            <p className='description'>{props.data.description}</p>
        </div>
    </div>
  )
}

export default Feature