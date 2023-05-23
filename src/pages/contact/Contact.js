import React, { useState } from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { submit } from "../atom/Atom";

function Contact() {
  const user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [userInput, setUserInput] = useState(user);
  const [err, setErr]=useState();
  const [isSubmit, setIsSubmit]=useRecoilState(submit);

  const navigate= useNavigate();
  function handleInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  function handleData(e) {
    e.preventDefault();
    const exsistingData = localStorage.getItem("userContact");
    const prsedData = exsistingData ? JSON.parse(exsistingData) : [];

    const newEntry = {
      firstname: userInput.firstname,
      lastname: userInput.lastname,
      email: userInput.email,
      password: userInput.password,
    };
    const newData = [...prsedData, newEntry];

    if (!Array.isArray(prsedData)) {
      prsedData = [];
    }

    // setErr(validate(userInput));
    setIsSubmit(true)

    

    if(isSubmit){
      localStorage.setItem("userContact", JSON.stringify(newData));
      setUserInput({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
alert("successfully submited")
      navigate("/")
    }
      
    

   
  }
 
  function validate(values){
    const errors={};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(values.firstname===""){
errors.firstname="Firstname is required"
    }
    else if(values.lastname===""){
      errors.lastname="Lastname is required"
    }
    else if(values.email===""){
      errors.email="Email is required"
      if(!regex.test(values.email)){
errors.email="Please enter a valid email"
      }
    }
    else if(values.password===""){
      errors.password="Password is required"
      if(!values.password.length <8 ){
        errors.password="Password length should be greater than 8 character"
      }
    }
    setErr(errors)
    return errors
   
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Firstname"
          value={userInput.firstname}
          onChange={handleInput}
        />
        {/* <p style={{color:"red"}}>{err?err.firstname:""}</p> */}
        <input
          type="text"
          name="lastname"
          placeholder="Enter Lastname"
          value={userInput.lastname}
          onChange={handleInput}
        />
         {/* <p style={{color:"red"}}>{err?err.lastname:""}</p> */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="false"
          value={userInput.email}
          onChange={handleInput}
        />
         {/* <p style={{color:"red"}}>{err?err.email:""}</p> */}
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="false"
          value={userInput.password}
          onChange={handleInput}
        />
         {/* <p style={{color:"red"}}>{err?err.password:""}</p> */}
        <Button onclick={handleData} name="Submit" />
      </form>
    </div>
  );
}

export default Contact;
