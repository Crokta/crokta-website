import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import axios from "axios";
import {yupResolver} from '@hookform/resolvers/yup'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Link from "next/link";
const MySwal = withReactContent(Swal);


const regDefaultValues = {
firstName:'',
middleName:'',
lastName:'',
email:'',
phoneNumber:'',
experience:'',
referrer:'',
currentJob:''
}

const alertContent = () => {
  MySwal.fire({
    // title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const BootCampCard = ({ bootcamp }) => {
const [regForm, setRegForm] = useState(regDefaultValues)
//   const mlRegForm = yup.object({
//     firstName : yup.string().required('first name is required'),
//     middleName: yup.string(),
//     lastName: yup.string().required('last name is required'),
//     email: yup.string().email('invalid email format'),
//     phoneNumber: yup.string().required('phone number is required'),
//     experience: yup.string().required('experience level is require'),
//     referrer: yup.string(),
//     currenJob: yup.string().required('current job is required')
//   })
// const validate = yupResolver(mlRegForm);

// const {handleSubmit, reset} = useForm({
//   resolver: validate,
//   defaultValues: regDefaultValues
// })

const isButtonSelected = (value) => {
  if (regForm?.experience === value) {
      return true;
  }
};

const handleChange =(e) => {
  const {name, value} = e.target;
  setRegForm((prev) => ({...prev, [name] : value}))
  console.log('change', regForm)
}
// const mlregistration = (values) => {
//   const payload ={
//     firstName: values.firstName,
//     middleName: values.middleName,
//     lastName: values.lastName,
//     email: values.email,
//     currentJob: values.currentJob,
//     referrer: values.referrer
//   }
//   console.log('pay', payload)
// }

const handleSubmit = async (e) => {
  e.preventDefault()
try {
  const url = 'https://mlbootcamp-reg-default-rtdb.firebaseio.com/mlregForm.json'
  const {firstName, lastName, middleName, experience, referrer, currentJob, email } = regForm
  const payload =  {firstName, lastName, middleName, experience, referrer, currentJob, email }
  console.log('paint', payload)
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({...payload})
  })
  alertContent()
  setRegForm(regDefaultValues)
  console.log('ress', response)
} catch(error){
  console.log('er', error)
}
}

  return (
    <>
      <div className="container">
        <div className="card">
          <span className="header">{bootcamp.title}</span>
          <div className="wrapper">
            <div className="text">
              The Modules to be covered in this ML Bootcamp are as follows:{" "}
            </div>
            <ol>
              <li> Introduction to Programming and Data Structures (Review)</li>
              <li>Probability and Statistics (Review)</li>
              <li> Linear Algebra for Machine Learning (Review)</li>
              <li>Introduction to Machine Learning</li>
              <li>
                {" "}
                Deep Learning and Neural
                <li>Natural Language Processing and Text Analytics </li>
                <li> Intro to Reinforcement Learning</li>
                Networks
              </li>
              <li>Introduction to Graph Neural Network </li>
              <li>Brief review of Large Language Models (LLMs)</li>
            </ol>
            <span className="note">
              {" "}
              Each of these will include Projects and Team Assignments
            </span>
            <ul className="unordered">
              <li style={{ fontWeight: 700 }}>Start Date: June 3rd, 2023</li>
              <li>How Long: 8 Weeks</li>
              <li> What Days: Saturdays and Sundays</li>
              <li>Medium: Online with Whiteboard</li>
              <li>Time: TBD</li>
              <li style={{ fontWeight: 700, marginTop: "15px" }}>
                Price: 200,000 Naira
              </li>
            </ul>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-holder">
                <label className="label" >First Name </label>
                <input className="input" name="firstName" type="text" required value={regForm?.firstName} onChange={handleChange}/>
              </div>
              <div className="input-holder">
                <label className="label">Middle Name </label>
                <input className="input"  name="middleName" type="text" value={regForm?.middleName} onChange={handleChange} />
              </div>
              <div className="input-holder">
                <label className="label">Last Name</label>
                <input className="input"name='lastName' type="text" required value={regForm?.lastName} onChange={handleChange}/>
              </div>
              <div className="input-holder">
                <label className="label">Email Address </label>
                <input className="input" name='email'  type="email" required value={regForm?.email} onChange={handleChange}/>
              </div>
              <div className="input-holder">
                <label className="label">Phone Number</label>
                <input className="input" name='phoneNumber' type="tel" required value={regForm?.phoneNumber} onChange={handleChange}/>
              </div>
              <div className="input-holder">
                <label className="label">Current Job </label>
                <input className="input" name='currentJob' type="text" required value={regForm?.currentJob} onChange={handleChange}/>
              </div>
              <div className="input-holder">
                <span className="label" style={{ marginBottom: "5px" }}>
                  What is your experience with Python
                </span>
                <div className="label-radio">
                  {" "}
                  <label className="label"> None</label>
                  <input type="radio" name="experience" className="radio-input" checked={isButtonSelected('none')}  required value='none' onChange={handleChange}/>{" "}
                </div>
                <div className="label-radio">
                  <label className="label"> Beginner </label>
                  <input type="radio" name='experience' className="radio-input" required checked={isButtonSelected('beginner')} value='beginner' onChange={handleChange}/>{" "}
                </div>
                <div className="label-radio">
                  <label className="label"> Intermediate </label>
                  <input type="radio" name='experience' className="radio-input" required checked={isButtonSelected('intermediate')} value='intermediate' onChange={handleChange}/>{" "}
                </div>
                <div className="label-radio">
                  <label className="label">
                    {" "}
                    Advanced (with Production Experience){" "}
                  </label>
                  <input type="radio" name='experience' className="radio-input"  required checked={isButtonSelected('advanced')} value='advanced' onChange={handleChange}/>{" "}
                </div>

                <div></div>
              </div>
              <div className="input-holder" style={{ marginTop: "20px" }}>
                <label className="label">
                  Were you referred by a Partner, kindly input the name of the
                  Partner Organization
                </label>
                <input className="input" name='referrer' type="text" required value={regForm?.referrer} onChange={handleChange}/>
              </div>
              <div className="button-holder">
            <button className="button" type="submit">Submit</button>
          </div>
            </form>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default BootCampCard;
