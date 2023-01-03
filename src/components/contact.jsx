import React, { useRef } from "react";
import styled from "styled-components";
import '../styles/contacto.css'
import emailjs from '@emailjs/browser';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";


export function Contact({stateContact, setStateContact}) {

    const sendEmail = (event) =>{
        event.preventDefault();

        emailjs.sendForm('service_6ee3e12', 'template_e9lq6yq', event.target, 'sQyI-yEsMH062tK5g')
        .then(response => alert("Message sent, you will receive a reply soon"))
        .catch(error => alert("error"))
    }



    return (

    <>
    {stateContact && 
    <Overlay>
    <ContenedorModal>
        <EncabezadoModal>
            <h3>CONTACT</h3>
        </EncabezadoModal>
        <BotonCerrar onClick={() => setStateContact(false)}>X</BotonCerrar>
        <div>
        <form onSubmit={sendEmail}>
        
        <label htmlFor="from_name">First Name</label>
        <input type="text"id="from_name"name="from_name"placeholder="Your name.." required/>
        

        <label htmlFor="email_id">Email</label>
        <input type="email"id="email_id"name="email_id"placeholder="Your email" required/>


        <label htmlFor="message">Message</label>
        <input type="text" id="message"name="message"placeholder="Write something.." required></input>
        
        <input type="submit"value="Submit"/>
        </form>
        </div>
        <div className="copy-mail">
            <h3>Or write me at my email:</h3>
            <CopyToClipboard text="info@caballerolucas.com">
                    <p onClick={() => toast("Copy!")} className="textforcopy">info@caballerolucas.com</p>                   
            </CopyToClipboard>
            <Toaster/>
        </div>

    </ContenedorModal>
</Overlay>}
    </>
)
}



const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0, 0, 0, 0.5);
    padding:40 px; 
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: 2
`;

const ContenedorModal = styled.div`
    width: 60vw;
    height: 90vh;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    margin-right: 30px;
    margin-bottom:10px;
    border-width: 5px;
    border-style: solid;
    border-color: #6e84b9;
    outline: 5px solid #fff;
    z-index: 3;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @media (max-width: 575px) {
        width: 80vw;
        margin-left: 5px;
        margin-right: 5px;
    }
    img{
        width: 100%
    }
    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
       
   
`



const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    @media (max-width: 575px) {
        margin-bottom: 5px;
        padding-bottom: 5px
    }
    h3{
        font-weight: 500;
        font-size: 16px;
        color: #272341;
        font-weight: 700
    }
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    
    width: 30px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #6e84b9;
    &:hover{
        background: #f2f2f2;
    }
`


