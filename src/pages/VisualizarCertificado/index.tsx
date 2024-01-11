import EstilosGlobais from "../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../components/MenuLateral/MenuLateral"
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin, IoDownload } from "react-icons/io5";
import { FaShareAltSquare } from "react-icons/fa";
import Certificado from '../../assets/icons/certificado.png'
import styled from "styled-components";

const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F3F3F3;


  
    img{
        width: 700px;
    }
    

    
`

const VisualizarCertificado = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral />
                <Secao>
                    <div>
                        <img src={Certificado} alt="" />
                        <div>
                            <FaShareAltSquare />
                            <AiFillInstagram />
                            <IoLogoLinkedin />
                            <IoLogoWhatsapp />
                            <IoDownload />
                        </div>
                    </div>
                </Secao>
            </main>
        </>
    )
}
export default VisualizarCertificado