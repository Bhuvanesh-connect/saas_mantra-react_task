import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import Feature from './Feature';
import './Homepage.css';
import OfferCard from './OfferCard';
import data from './data.json';
import Footer from '../library/footer/Footer';
import { toast } from 'react-toastify';

function Homepage() {

    const [formData , setFormData] = useState({name:"",email:"",designation:"",contact:""});

    const inputsHandler = (e) =>{
            const { name, value } = e.target;
            setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("formData",formData);

        if(formData.name.length != 0 && formData.email.length != 0 && formData.designation.length != 0 && formData.contact.length != 0){

            console.log("formData",formData);
            
            let requestOptions;
            requestOptions = {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }
            fetch(`https://test.site/eea4fc26-cdc8`, requestOptions)
     
                toast.success("Your Info Sent Successfully..!!!");
                setFormData({name:"",email:"",designation:"",contact:""});
        }
        else{
            toast.error("Enter Valid Inputs in all fields!");
        }
    }

  return (
    <div className='Homepage innerpage'>
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
                <div className='content_row row g-4'>
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
                        <Form className='row g-3 text-start' onSubmit={(e)=>HandleSubmit(e)} id="contact-form">
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" value={formData.name} placeholder='Name' onChange={(e)=>inputsHandler(e)}/>
                            </Form.Group>

                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" value={formData.email} placeholder='Email' onChange={(e)=>inputsHandler(e)}/>
                            </Form.Group>
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control name="designation" value={formData.designation} placeholder='Designation' onChange={(e)=>inputsHandler(e)}/>
                            </Form.Group>
                            <Form.Group className='col-12 col-md-6' controlId="formGridCity">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control name='contact' value={formData.contact} placeholder='Contact' onChange={(e)=>inputsHandler(e)}/>
                            </Form.Group>

                            <Button type="submit" className='btn btn_submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    
                </div>
                
            </div>
        </div>


        <Footer/>

    </div>
  )
}

export default Homepage