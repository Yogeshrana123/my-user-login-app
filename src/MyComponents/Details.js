import React from "react";
import {useEffect} from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Details() {
    const history =useNavigate();
  const [logindata,setLogindata] = useState([]);
  var todayDate = new Date().toISOString().slice(0,10);
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Birthday = ()=>{
     const getuser = localStorage.getItem("user_login");
     if(getuser && getuser.length){
      const user = JSON.parse(getuser);
       setLogindata(user);  

       const userbirth=logindata.map((el,k)=>{
        return el.date===todayDate;
       });
       if(userbirth){
          setTimeout(()=>{
            handleShow();

          },3000);
       }
     }
    
  }
  useEffect(()=>{
      Birthday();
  },[]);

  const userlogout=()=>{
    localStorage.removeItem("user_login");
    history("/");
  }
  return (
            <>
            { logindata.length===0 ?"error":
                <>
                <h1>Details page</h1>
                <h1>{logindata[0].name}</h1>
                 <Button variant="primary" onClick={userlogout}>Log Out</Button>
                  {logindata[0].date===todayDate?
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{logindata[0].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>wish you many many happy returns of tha day</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>:""
                }
                </>
            }
            </>
  );
}

export default Details;