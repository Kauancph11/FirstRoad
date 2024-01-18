import { Link } from "react-router-dom"
import EstilosGlobais from "../../components/EstilosGlobais/EstilosGlobais"
import styled from "styled-components"
import logo from "../../assets/icons/Logo_FirstRoad_Vertical_Colorido.svg"

const Secao = styled.section`
    background-image: url(../../../public/Estrada_manha.jpg);
    background-repeat: no-repeat;
    background-size: cover;
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
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0.218);
    border-radius: 10px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 150px;
    }
    h1{
        font-size: 42px;
        font-family: PoppinsBold;
        color: white;
        margin: 0px;
    }
    
`

const InputContainer = styled.div`
    width: 80%;
    height: 35px;
    input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #FFFFFF;

        &::placeholder{
            color: white;
            font-size: 20px;
            font-family: PoppinsBold;
        }
    }

`

const Login = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <Secao>
                    <form>

                        <LoginContainer>
                            <img src={logo} alt="" />
                            <h1>Login</h1>
                            <InputContainer>
                                <input type="email" placeholder="E-mail" />
                            </InputContainer>
                            <InputContainer>
                                <input type="password" placeholder="Senha" />
                            </InputContainer>

                            <div>
                                <label htmlFor="">
                                    <input type="checkbox" />
                                    Lembrar senha
                                </label>
                            </div>

                            <div>
                                <button>Login</button>
                            </div>

                            <Link to="">
                                <span>Esqueceu a Senha?</span>
                            </Link>

                            <span>Precisa de ajuda? <Link to="">Suporte</Link></span>
                        </LoginContainer>
                    </form>
                </Secao>
            </main>
        </>
    )
}
export default Login