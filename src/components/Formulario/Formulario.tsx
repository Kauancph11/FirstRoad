import styled from "styled-components"
import BotaoPadrao from "../BotaoPadrao/BotaoPadrao"
import { useState } from "react"
import api from "../../utils/api"

const Secao = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;

    h1{
        font-size: 42px;
        font-family: PoppinsBold;
        color: var(--principal-cor-3);
    }

    @media screen and (max-width: 700px){
        gap: 50px;
    }

    form{
        display: flex;
        gap: 20px;
        width: 70dvw;
        max-width: 1000px;
        justify-content: center;

       @media screen and (max-width: 1000px){
        width: 90dvw;
       }

    }
`

const DivInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 700px){
        width: 250px;
    }

    @media screen and (max-width: 400px){
        width: 130px;
    }
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    label{
        color: #000000;
        font-size: 16px;
        font-family: PoppinsBold ;
    }

    select{
        height: 35px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);
        padding-left: 10px;

    }
    

    input{
        height: 30px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);
        
        
        
    }

    input::placeholder{
        padding-left: 10px;
    }
    
`

const DivSenha = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    

    input{
        height: 32px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);

        @media screen and (max-width: 700px){
            width: 100%;
        }
        
    }

    input::placeholder{
        padding-left: 10px;
    }

    label{
        color: #000000;
        font-size: 16px;
        font-family: PoppinsBold ;
    }

`

const DivSenhaContainer = styled.div`
    display: flex;
    gap: 20px;
`

const BotaoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
`

const Formulario = () => {

    const [nomeCompleto, setNomeCompleto] = useState<string>("")
    const [nif, setNif] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [unidade, setUnidade] = useState<string>("")
    const [cargo, setCargo] = useState<string>("")

    function EditarPerfilColaborador(event: any) {
        event.preventDefault();

        const formData = new FormData();

        formData.append("", nomeCompleto)
        formData.append("", nif)
        formData.append("", senha)
        formData.append("", email)
        formData.append("", dataNascimento)
        formData.append("", unidade)
        formData.append("", cargo)

        api.post("usuarios", formData)
        .then((response: any) => {
            console.table(response)
            alert("Usuário cadastrado com sucesso!")
        })
        .catch((error: any) => {
            console.log(error)
            alert("Falha ao cadastrar um novo usuário")
        })
        
    }
    return (
        <Secao>
            <h1>Editar Perfil</h1>
            <input type="file" />
            <form action="" method="POST" onSubmit={EditarPerfilColaborador}>
                <DivInputContainer>
                    <DivInput>
                        <label htmlFor="Nome Completo">Nome Completo</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome completo"
                            required
                            onChange={(e) => {
                                setNomeCompleto(e.target.value)
                            }}
                        />
                    </DivInput>
                    <DivInput>
                        <label htmlFor="Nif">NIF</label>
                        <input
                            type="number"
                            placeholder="00000000"
                            required
                            onChange={(e) => {
                                setNif(e.target.value)
                            }}
                        />
                    </DivInput>

                    <DivSenhaContainer>
                        <DivSenha>
                            <label htmlFor="Senha Antiga"> Senha Antiga</label>
                            <input
                                type="password"
                                placeholder="********"
                                required
                                onChange={(e) => {
                                    setSenha(e.target.value)
                                }}
                            />
                        </DivSenha>

                        <DivSenha>
                            <label htmlFor="Senha "> Senha Nova</label>
                            <input
                                type="password"
                                placeholder="********"
                                required
                                onChange={(e) => {
                                    setSenha(e.target.value)
                                }}
                            />
                        </DivSenha>
                    </DivSenhaContainer>

                    <DivInput>
                        <label htmlFor="E-mail">E-mail</label>
                        <input
                            type="email"
                            placeholder="email@enail.vw.com.br"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </DivInput>
                </DivInputContainer>

                <DivInputContainer>
                    <DivInput>
                        <label htmlFor="Data de nascimento">Data de nascimento</label>
                        <input
                            type="date"
                            required
                            onChange={(e) => {
                                setDataNascimento(e.target.value)
                            }}
                        />
                    </DivInput>

                    <DivInput>
                        <label htmlFor="Unidade">Unidade</label>
                        <select
                            name="Selecione"
                            aria-placeholder="Selecione"
                            onChange={(e) => {
                                setUnidade(e.target.value)
                            }}
                            defaultValue={unidade}
                        >
                            <option value="selecione">selecione</option>
                        </select>
                    </DivInput>

                    <DivInput>
                        <label htmlFor="Cargo">Cargo</label>
                        <select
                            name="Selecione"
                            aria-placeholder="Selecione"
                            onChange={(e) => {
                                setCargo(e.target.value)
                            }}
                            defaultValue={cargo}
                        >
                            <option value="selecione">selecione</option>
                        </select>
                    </DivInput>
                    <BotaoContainer>
                        <BotaoPadrao >
                            Salvar
                        </BotaoPadrao>
                    </BotaoContainer>
                </DivInputContainer>
            </form>
        </Secao>
    )
}

export default Formulario