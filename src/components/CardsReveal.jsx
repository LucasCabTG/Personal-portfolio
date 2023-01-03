import '../styles/CardsReveal.css'
import { AiOutlineLink } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";


export function CardsReveal({estado, title, setEstado, information, link, linkgithub}) {
    return (
        <>
           {estado &&
           <div className='overlay'>
           <div className='reveal animate__animated animate__fadeInUp'>
            <div className='encabezadoreveal'>
            <h4 className='titulo-reveal'>{title}</h4>
            </div>
            <p>{information}</p>
            <div className='container-botones'>
                <a className='' href={link} target="_blank" rel="noopener noreferrer"><button className='ancla1'><AiOutlineLink/></button></a>
                <a className='' href={linkgithub} target="_blank" rel="noopener noreferrer"><button className='ancla1'><FiGithub/></button></a>
            </div>
           </div>
           </div>
           } 
        </>
    )
}
