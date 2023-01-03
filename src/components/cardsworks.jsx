import React, {useState} from "react";
import '../styles/Cardsworks.css'
import { CardsModal } from "./CardsModal";

export function CardsWorks({title, image, alt, information, link, linkgithub}) {

    function abrirmodal() {
        setStateModal(!stateModal)
    }

    const [stateModal, setStateModal] = useState(false)

    return (
        <>
            <div onClick={abrirmodal} className="item">
                <div className="polaroid"><img src={image} alt={alt}/>
                <div className="caption">{title}</div>
                </div>
            </div>
            <CardsModal
            state={stateModal}
            setState={setStateModal}
            title={title}
            image={image}
            alt={alt}
            information={information}
            link={link}
            linkgithub={linkgithub}>

            </CardsModal>
        </>
    )
}
