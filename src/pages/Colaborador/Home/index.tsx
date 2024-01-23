import styled from "styled-components";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral";
import NavegacaoHome from "../../../components/NavegacaoHome";
import { FaUser } from 'react-icons/fa'
import { FaTruck, FaMapMarkedAlt, FaAddressBook } from 'react-icons/fa'


const ListaEstilizada = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url('../../../../public/painel_volks.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        gap: 40px;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 5px;

        
    }


    
`

const Home = () => {



    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral />
                <ListaEstilizada>

                    <ul>
                        <NavegacaoHome toValue="/editar" icone={<FaUser size={50} />} >
                            Perfil
                        </NavegacaoHome>



                        <NavegacaoHome toValue="/avatar" icone={<FaTruck size={50} />} >
                            Avatar
                        </NavegacaoHome>



                        <NavegacaoHome toValue="/Trilha" icone={<FaMapMarkedAlt size={50} />} >
                            Trilha
                        </NavegacaoHome>



                        <NavegacaoHome toValue="" icone={<FaAddressBook size={50} />} >
                            Agenda
                        </NavegacaoHome>

                    </ul>

                </ListaEstilizada>
            </main>

        </>

    )
}

export default Home;