import React from 'react';
import {Button} from 'react-bootstrap';

function OfferCard(props) {

  // console.log(props.data);
  return (
    <div className='col-12 col-md-6 col-lg-4'>
          <div className="offerCard card text-start">
              <div className="card-body">
                  <h6 className='category'>{props.data.category}</h6>
                  {props.data.price == "Free" ?
                    <h2 className='price'>{props.data.price}</h2>
                    :
                    <h2 className='price'>{props.data.price} <span>/MO</span></h2>
                  }
                  
                  <p className='description'>{props.data.description}</p>
                  <ul>
                      {props.data.points && props.data.points.map(point =>{
                        return(
                          <li>{point}</li>
                        )
                      })}
                      
                  </ul>
              </div>
              <div className="card-footer text-center">
                  <Button className='btn_startPlan'>{props.data.button_name}</Button>
              </div>
          </div>
    </div>
    
  )
}

export default OfferCard