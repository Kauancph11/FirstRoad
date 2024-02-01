import { Link } from "react-router-dom"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import styled from "styled-components"
import logo from "../../../assets/icons/Logo_FirstRoad_Vertical_Colorido.svg"
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from "../../../utils/api";
import { Jwt, usuarioAutenticado } from "../../../services/auth";






const Secao = styled.section`
    background-image: url(../../../public/Estrada_manha.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100dvh;
        

    form{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const LoginContainer = styled.div`
    width: 450px;
    height: 80%;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0.218);
    border-radius: 10px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 120px;
    }
    h1{
        font-size: 35px;
        font-family: PoppinsBold;
        color: white;
        margin: 0px;
    }

    @media screen and (max-width: 600px){
        width: 350px;
    }
    @media screen and (max-width: 450px){
        width: 320px;
    }
`

const InputContainer = styled.div`
    width: 80%;
    height: 35px;
    position: relative;
    input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 3px solid #FFFFFF;
        outline: none;
        color: white;
    
        &::placeholder{
            color: white;
            font-size: 18px;
            pointer-events: none;
        }
    }
`

const Botao = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;

    button{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: none;
        color: black;
        font-size: 18px;
        font-family: PoppinsBold;
        background-color: white;
        &:hover{
            background-color: black;
            color: white;
            transition: .8s;
        }
    }
`

const CheckBox = styled.div`
    width: 100%;
    label{
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 16px;
        color: white;
    }

    input{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        text-decoration: underline;
    }
    span{
        font-size: 16px;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
`
const IconeSenha = styled(AiFillEye)`
    position: absolute;
    right: 10px;
    top: 8px;
    width: 20px;
    height: 20px;
    color: white;
    cursor: pointer;
`

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

     const usuarioAutenticado = () => localStorage.getItem('usuario-login') !== null;

     const Jwt  = () => {

        let base64 = localStorage.getItem('usuario-login').split('.')[1];

        return JSON.parse(window.atob(base64));
    };

    function realizarAutenticacao(event: any) {
        event.preventDefault();




        api.post("login", {
            email: email,
            senha: senha
        })
            .then((response: any) => {
                console.log(response);

                if (response.status === 200) {
                    localStorage.setItem('usuario-login', response.data.token)
                    let base64: any
                    let usuarioLogin = localStorage.getItem('usuario-login');

                    if (usuarioLogin && usuarioLogin.includes('.')) {
                        base64 = usuarioLogin.split('.')[1];
                        // Restante do código
                    } else {
                        console.error('A chave "usuario-login" não tem o formato esperado.');
                    }
                    console.log(response.data)
                    console.log("Voce conseguiu acessar", response)
                    console.log()
                    console.log()
                    switch () {
                        case 'COLABORADOR':
                            setTimeout(function () { window.location.href = `/home`; }, 1000);
                            console.log(usuarioAutenticado())
                            break;

                        case 'ADMIN':
                            setTimeout(function () { window.location.href = `/home`; }, 1000);
                            console.log(usuarioAutenticado())
                            break;

                        case 'GESTOR':
                            setTimeout(function () { window.location.href = `/home`; }, 1000);
                            console.log(usuarioAutenticado())
                            break;
                    }
                }
            })
            .catch((erro: any) => {
                console.log(erro);
            });


    }
    return (
        <>
            <EstilosGlobais />
            <main>
                <Secao>
                    <form method="POST" onSubmit={realizarAutenticacao}>

                        <LoginContainer
                        >
                            <img src={logo} alt="" />
                            <h1>Login</h1>
                            <InputContainer>
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </InputContainer>
                            <InputContainer>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <IconeSenha />
                            </InputContainer>

                            <CheckBox>
                                <label htmlFor="">
                                    <input type="checkbox" />
                                    Lembrar senha
                                </label>
                            </CheckBox>

                            <Botao>
                                <button type="submit">Login</button>
                            </Botao>

                            <LinkEstilizado to="">
                                <span>Esqueceu a Senha?</span>
                            </LinkEstilizado>

                            <span>Precisa de ajuda? <LinkEstilizado to="">Suporte</LinkEstilizado></span>
                        </LoginContainer>
                    </form>
                </Secao>
            </main>
        </>
    )
}
export default Login


