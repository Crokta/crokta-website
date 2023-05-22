import React, { Component } from 'react';
import Link from 'next/link';

const BootCampCard = ({ bootcamp }) => {
  return (
    <>
      <h1>Loading BootCamp Page</h1>
      <div className='container'>
        <div className='card'>
          <span>{bootcamp.title}</span>
        </div>
      </div>
    </>
  );
};

export default BootCampCard;
