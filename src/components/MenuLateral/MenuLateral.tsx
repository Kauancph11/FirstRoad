import { Link } from "react-router-dom";
import styled from "styled-components";
import logoCaminhoes from '../../assets/icons/logocaminhoes.png'
import fotoPadrao from '../../assets/icons/fotopadrao_user_aside.svg'
import { FaPen } from 'react-icons/fa'
import { ImExit } from "react-icons/im"
import LogoFirstRoad from '../../assets/icons/Logo_FirstRoad_aside.svg'
import { useEffect } from "react";
import { TiThMenu } from 'react-icons/ti'


const Icone = styled(Link)`
    display: none;
    
    @media screen and (max-width:1000px){
        display: flex;
        background-color: var(--principal-cor-2);
        padding: 7px;
        border-radius: 0 15px 15px 0;
        position: absolute;
        top: 20px;
        right: -40px; 
    }
    
`
const SombraEstilizada = styled.div`

    @media screen and (max-width: 1000px) {
        height: 100svh;
        width: 100vw;
        background-color: #0000004f;
        position: fixed;
        top: 0;
        right: 110vw;
        overflow: hidden;
        transition: .5s;
        backdrop-filter: blur(10px);
        z-index: 2;
    }
`

const MenuEstilizado = styled.aside`
    display: flex;
    height: 100dvh;
    width: 270px;
    background-color:  ${(props: any) => props.backgroundColor || '#048ABF'};
        position: flex;
        left: 0px;
        transition: all 0.5s ease;
        z-index: 2;

        @media screen and(max-width: 1000px) {
            position: absolute;

        }

    div{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            justify-content: space-around;
        

        img{
                width: 100px;
            }
        
        div{
                position: relative;
            div{
                    width: 30px;
                    position: absolute;
                    top: 80px;
                    left: 75px;

                }
            }

        form{
                width: 270px;
                display: flex;
                justify-content: center;
            ul{
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 0;
                    align-items: flex-start;
                    gap: 20px;
                }
            }

        footer{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 15px;
            
            div{
                    cursor: pointer;
                }
            }


        }

        `





const MenuLateral = ({backgroundColor, children, toValue}: any) => {

    useEffect(() => {
        const handleResize: any = () => {
            const aside: any = document.getElementById("aside")
            const eventoMenu: any = window.innerWidth

            if (eventoMenu >= 768) {
                aside.style.left = "0px"

            } else {
                aside.style.left = "-265px"
            }
        }

        window.addEventListener("resize", handleResize)

    }, [])

    const mostrarMenu = () => {
        const sombra: any = document.getElementById("sombra")
        const body: any = document.getElementById("body")
        const aside: any = document.getElementById("aside")


        if (window.getComputedStyle(aside).left == "0px") {
            aside.style.left = "-265px"
            sombra.style.right = "110vw"
            body.style.overflow = "auto"
        } else {
            aside.style.left = "0px"
            sombra.style.right = "0px"
            body.style.overflow = "hidden"
        }
    }


    return (
        <>
            <SombraEstilizada id="sombra" />
            <MenuEstilizado backgroundColor={backgroundColor} id="aside">

                <div>

                    <img src={logoCaminhoes} alt="logo caminhoes" />

                    <Icone to="#" onClick={mostrarMenu}>
                        <TiThMenu size={30} color='#FFFFFF' />
                    </Icone>

                    <div>
                        <img src={fotoPadrao} alt="" />
                        <div>
                            <Link to={toValue}>
                                <FaPen color="#FFFFFF" size={20} />
                            </Link>
                        </div>
                    </div>

                    <form>
                        <ul>
                            {children}
                        </ul>
                    </form>

                    <footer>
                        <div>
                            <ImExit size={25} color="#FFFFFF" />
                        </div>
                        <img src={LogoFirstRoad} alt="" />
                    </footer>

                </div>
            </MenuEstilizado>
        </>
    )
}
export default MenuLateral;