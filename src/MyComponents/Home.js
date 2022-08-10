import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignImg from "./SignImg";
import { useState } from 'react';
import { NavLink} from "react-router-dom";

function Home() {

  const [inpval , setInpval] = useState({
      name:"",
      email:"",
      date:"",
      password:"",
  });

  const [data,setData] = useState([]);


  const getData = (e)=>{
    const {value,name} = e.target;
    setInpval(()=>{
      return{
        ...inpval,
        [name]:value,

      }
    });
  }

  const addData = (e)=>{
    e.preventDefault();
    const {name,email,date,password}=inpval;
    if(name ===""){
      alert("name field is requred" );
    }else if(email === ""){
       alert("email field is requred" );
    }else if(!email.includes("@")){
       alert("plz enter valid email addres" );
    }else if(date===""){
        alert("date field is requred" );
    }else if(password===""){
       alert("password field is requred" );
    }else if(password.length < 8){
      alert("password length  greater 8" );
    }else{
      localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
    
    }

  }

  return (
    <>
          <div className="container mt-5">
            <section className="d-flex justify-content-between" >
              <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                  <h3 className="text-center col-lg-6 ">Sign Up</h3>
                  <Form >
                    <Form.Group className="mb-3 col-lg-6" >
                      <Form.Control type="text" name="name" onChange ={getData} placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6">
                      <Form.Control type="email" name="email" onChange ={getData} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6">
                      <Form.Control type="date" name="date" onChange ={getData} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6">
                      <Form.Control type="password" name="password" onChange ={getData} placeholder="Password" />
                    </Form.Group>

                    <Button className="col-lg-6" variant="primary" onClick={addData} type="submit" style={{background:"rgb(67,187,127)"}}>
                      Submit
                    </Button>
                  </Form>
                  <p className="p-3">Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
              </div>
              <SignImg/>
            </section>
          </div>
      </>
   
  );
}

export default Home;