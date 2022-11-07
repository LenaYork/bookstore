import React, { useState } from 'react';
import "./Modal.css";
import { Input } from "../Input/Input";

export const Modal = ({isModalActive, setIsModalActive}) => {

    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");

    const modalHandler = () => {
        setIsModalActive(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsModalActive(false);
        console.log("userData", {userEmail, userPassword});
    }

    return(
        <div 
            className={isModalActive ? "modal-container active-modal" : "modal-container"}  
            onClick={modalHandler}
        >
            <form 
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <label htmlFor="userEmail">Your email:</label>
                <Input 
                    id="userEmail"
                    type="email"
                    className="modal-input"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="userPassword">Your password:</label>
                <Input 
                    id="userPassword"
                    type="password"
                    className="modal-input" 
                    onChange={(e) => setUserPassword(e.target.value)}   
                />
                <button 
                    type="submit" 
                    className="submit-button"
                    onClick={submitHandler}
                >
                    Log in
                </button>
            </form>
            
        </div>
    )
}
