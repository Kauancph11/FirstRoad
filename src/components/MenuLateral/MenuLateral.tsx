import { Link } from "react-router-dom";
import styled from "styled-components";
import logoCaminhoes from '../../assets/icons/logocaminhoes.png'
import fotoPadrao from '../../assets/icons/fotopadrao_user_aside.svg'
import { FaHome, FaPen, FaTruck, FaMapMarkedAlt, FaAddressBook, FaInfoCircle } from 'react-icons/fa'
import MenuItemNavegacao from "../MenuItemNavegação/MenuItemNavegacao";
import * as Icon from '@phosphor-icons/react'
import { ImExit } from "react-icons/im"
import LogoFirstRoad from '../../assets/icons/Logo_FirstRoad_aside.svg'




const MenuEstilizado = styled.aside`
    display: block;
    height: 100vh;
    width: 270px;
    background-color: var(--principal-cor-2);

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;

        img{
            width: 100px;
        }
        
        div{
            position: relative;
            a{
                width: 30px;
                position: absolute;
                top: 50px;
                left: 42px;
                 
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



const MenuLateral = () => {
    return (
        <MenuEstilizado>
            <div>

                <img src={logoCaminhoes} alt="logo caminhoes" />

                <div>
                    <img src={fotoPadrao} alt="" />
                    <a>
                        <Link to="">
                            <FaPen color="#FFFFFF" size={20} />
                        </Link>
                    </a>
                </div>

                <form>
                    <ul>

                        <MenuItemNavegacao toValue="" icone={<FaHome size={25} color="#FFFFFF" />} >
                            Tela Inicial
                        </MenuItemNavegacao>


                        <MenuItemNavegacao toValue="" icone={<FaTruck size={25} color="#FFFFFF" />} >
                            Avatar
                        </MenuItemNavegacao>



                        <MenuItemNavegacao toValue="" icone={<FaMapMarkedAlt size={25} color="#FFFFFF" />} >
                            Trilha
                        </MenuItemNavegacao>



                        <MenuItemNavegacao toValue="" icone={<FaAddressBook size={25} color="#FFFFFF" />} >
                            Agenda
                        </MenuItemNavegacao>



                        <MenuItemNavegacao toValue="" icone={<FaInfoCircle size={25} color="#FFFFFF" />} >
                            Suporte
                        </MenuItemNavegacao>



                        <MenuItemNavegacao toValue="" icone={<Icon.Files size={25} color="#FFFFFF" weight="fill" />} >
                            Certificados
                        </MenuItemNavegacao>

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
    )
}
export default MenuLateral;