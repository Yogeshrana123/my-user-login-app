import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignImg from "./SignImg";
import { useState } from 'react';
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const history =useNavigate();
   const [inpval , setInpval] = useState({
      email:"",
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
    const getuserArr = localStorage.getItem("useryoutube");
    const {email,password}=inpval;
    if(email === ""){
       alert("email field is requred" );
    }else if(!email.includes("@")){
       alert("plz enter valid email addres" );
    }else if(password===""){
       alert("password field is requred" );
    }else{
          if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            const userlogin=userdata.filter((el,k)=>{
              return el.email===email && el.password===password
            });

            if(userlogin.length===0){
              alert("invalid details");
            }else{
              console.log("user login a succssfully");
              localStorage.setItem("user_login",JSON.stringify(userlogin));
              history("/details");
            }
          }
    }

  }
  return (
  	       <>
          <div className="container mt-5">
            <section className="d-flex justify-content-between" >
              <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                  <h3 className="text-center col-lg-6 ">Sign In</h3>
                  <Form >

                    <Form.Group className="mb-3 col-lg-6">
                      <Form.Control type="email" name="email" onChange ={getData} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6">
                      <Form.Control type="password" name="password" onChange ={getData} placeholder="Password" />
                    </Form.Group>

                    <Button className="col-lg-6" variant="primary" onClick={addData} type="submit" style={{background:"rgb(67,187,127)"}}>
                      Submit
                    </Button>
                  </Form>
                  <p className="p-3">Already Have an Account <span><NavLink to="/">SignUp</NavLink></span></p>
              </div>
              <SignImg/>
            </section>
          </div>
      </>
   
  );
}

export default Login;