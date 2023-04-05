import "./personal.scss";
import React, { useState } from 'react';
export default function Personal() {
    
    const [showBirthDate, setShowBirthDate]=useState(false);
    const [showNationality, setShowNationality]=useState(false);
    const [showAddress, setShowAddress]=useState(false);
    const [showLanguages, setShowLanguages]=useState(false);
    const [showHobbies, setShowHobbies]=useState(false); 
  
  
    return (
      <div className="personal" id="personal">
      <div className="details-container">
        <div className="details-left">
          <h1>Personal Details</h1>
          <div className="button-container">
           
            <button className="details-button" onClick={() => setShowBirthDate(!showBirthDate)}>
              <img src="assets/cake.png" className="icon" />Date of Birth
            </button>
            {showBirthDate && (
              <p>22nd October, 2001</p>
            )}
            <button className="details-button" onClick={() => setShowNationality(!showNationality)}>
              <img src="assets/person-pin.png" className="icon" />Nationality
            </button>
            {showNationality && (
              <p>Indian</p>
            )}
            <button className="details-button" onClick={() => setShowAddress(!showAddress)}>
              <img src="assets/home.png" className="icon" />Address
            </button>
            {showAddress && (
              <p>Adrija Apartment, DumDum, Kolkata</p>
            )}
             <button className="details-button" onClick={() => setShowLanguages(!showLanguages)}>
              <img src="assets/language.png" className="icon" />Languages Known
            </button>
            {showLanguages && (
              <ul>
                <li><b>• English</b> (Professional Proficiency)</li>
                <li><b>• Bengali</b> (Professional Proficiency)</li>
                <li><b>• Hindi</b> (Intermediate)</li>
              </ul>
            )}
            <button className="details-button" onClick={() => setShowHobbies(!showHobbies)}>
              <img src="assets/book.png" className="icon" />Hobbies
            </button>
            {showHobbies && (
              <ul>
                <li>• Reading Story Books</li>
                <li>• Blogging</li>
                <li>• Travelling</li>
              </ul>
            )}
          </div>
        </div>
        <div className="details-right">
          <img src="assets/mypic5.png" alt="Profile" />
        </div>
        </div>
        </div>
     )}