import React,{useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import Feature from './Feature';
import './Homepage.css';
import OfferCard from './OfferCard';
import dataJSON from './data.json';

function Homepage() {
  const [data,setData] = useState(dataJSON);

  // useEffect(() => {
  //   console.log(dataJSON);
  //   setData(dataJSON);
  // }, [0])
  


  return (
    <div className='Homepage'>
        <div className='Plans_Section container-fluid'>
            <div className='container text-center'>
                <h2 className='main_heading'>Find the perfect plan for your business</h2>
                <div className='row_content row g-3'>

                    { data[0].plans && data[0].plans.map(plan => {
                        return(
                          <OfferCard data={plan}/>
                        ) 
                    })}
                </div>
            </div>
        </div>
        <div className='Features_Section container-fluid'>
            <div className='container text-center'>
                <div className='content_row row g-3'>
                    { data[0].features && data[0].features.map(feature => {
                        return(
                          <Feature data={feature}/>
                        ) 
                    })}
                    
                </div>
            </div>
        </div>
        <div className='Contact_Section container-fluid'>
            <div className='container text-center'>
                <h2 className='heading'>Lorem Ipsum</h2>
                <div className='line'></div>

                <div className='content_row row mt-5'>
                    <div className='col-12 col-lg-8'>
                        <Form className='row g-3 text-start'>
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder='Name'/>
                            </Form.Group>

                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder='Email'/>
                            </Form.Group>
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control placeholder='Designation'/>
                            </Form.Group>
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control placeholder='Contact'/>
                            </Form.Group>

                            <Button className='btn_submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Homepage