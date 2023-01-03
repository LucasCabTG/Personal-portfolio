import React, {useState} from "react";
import styled from "styled-components";
import '../styles/CardsModal.css'
import { CardsReveal } from "./CardsReveal";

export function CardsModal({state, setState, title, image, alt, information, link, linkgithub}) {

    const [stateReveal, setStateReveal] = useState(false)

    function reveal() {
        setStateReveal(!stateReveal)
        setStateButton(!stateButton)
    }
    const [stateButton, setStateButton] = useState(true)

    var botoncito = ""
        if (stateButton === true) {
            botoncito = "+"
        }
        else{
            botoncito = "-"
        }
    
    

    return (
        <>
        {state && 
        <Overlay>
        <ContenedorModal>
        <CardsReveal 
        estado={stateReveal}
        setEstado={setStateReveal}
        title={title}
        information={information}
        link={link}
        linkgithub={linkgithub}/>
            <EncabezadoModal>
                <h3>{title}</h3>
            </EncabezadoModal>
            <BotonCerrar onClick={() => setState(false)}>X</BotonCerrar>
            <img src={image} alt={alt} />
            <button onClick={reveal} className="button botoncircular"><span><span>{botoncito}</span></span></button>

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
        width: 95vw;       
        height: 70vh; 
        margin-right: 5px;
        margin-left: 5px;
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

