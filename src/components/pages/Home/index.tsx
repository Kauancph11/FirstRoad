import styled from "styled-components";
import EstilosGlobais from "../../EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../MenuLateral/MenuLateral";
import NavegacaoHome from "../../NavegacaoHome";
import { FaUser } from 'react-icons/fa'
import { FaTruck, FaMapMarkedAlt, FaAddressBook } from 'react-icons/fa'

const ListaEstilizada = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url('../../../../public/painel_volks.png');
    background-size: cover;
    background-repeat: no-repeat;
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        gap: 40px;
        
    }
`



const Home = () => {
    return (
        <main>
            <EstilosGlobais />
            <MenuLateral />
            <ListaEstilizada>
                <ul>
                    <NavegacaoHome toValue="" icone={<FaUser size={50} />} >
                        Perfil
                    </NavegacaoHome>



                    <NavegacaoHome toValue="" icone={<FaTruck size={50} />} >
                        Avatar
                    </NavegacaoHome>



                    <NavegacaoHome toValue="" icone={<FaMapMarkedAlt size={50} />} >
                        Trilha
                    </NavegacaoHome>



                    <NavegacaoHome toValue="" icone={<FaAddressBook size={50} />} >
                        Agenda
                    </NavegacaoHome>

                </ul>
            </ListaEstilizada>

        </main>

    )
}

export default Home;