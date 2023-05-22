import React, { Component } from "react";
import Link from "next/link";

const BootCampCard = ({ bootcamp }) => {
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
            <form className="form">
              <div className="input-holder">
                <label className="label">First Name </label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <label className="label">Middle Name </label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <label className="label">Last Name</label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <label className="label">Email Address </label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <label className="label">Phone Number</label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <label className="label">Current Job </label>
                <input className="input" />
              </div>
              <div className="input-holder">
                <span className="label" style={{marginBottom:'5px'}}>
                  What is your experience with Python
                </span>
                <div className="label-radio">
                  {" "}
                  <label style={{marginRight:'5px'}}> None</label>
                  <input  type="radio" />{" "}
                </div>
                <div className="label-radio">
                  <label  style={{marginRight:'5px'}}> Beginner </label>
                  <input  type="radio" />{" "}
                </div>
                <div className="label-radio">
                  <label style={{marginRight:'5px'}}> Intermediate </label>
                  <input  type="radio" />{" "}
                </div>
                <div className="label-radio">
                  <label style={{marginRight:'5px'}}> Advanced (with Production Experience) </label>
                  <input
                  
                    type="radio"
                  />{" "}
                </div>

                <div></div>
              </div>
              <div className="input-holder">
                <label className="label">
                  Were you referred by a Partner, kindly input the name of the
                  Partner Organization
                </label>
                <input className="input" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootCampCard;
