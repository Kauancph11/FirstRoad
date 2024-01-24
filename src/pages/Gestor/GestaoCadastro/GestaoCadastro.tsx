import { Link } from "react-router-dom"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import styled from "styled-components"
import 'materialize-css/dist/css/materialize.min.css'

const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3F3F3;

    header{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 120px;
        align-items: center;
    }

    table{
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`


const GestaoCadastro = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral backgroundColor='#42816C' toValue='/editarGestor7'>
                    <LinksAsideGestor />
                </MenuLateral>

                <Secao>
                    <header>
                        <div>
                            <input type="text" placeholder="Busque pelo colaborador"/>
                        </div>

                        <Link to="">
                            Cadastrar
                        </Link>
                    </header>

                    <table className="bordered striped centered">
                        <thead>
                            <tr>
                                <th>Nif</th>
                                <th>Nome</th>
                                <th>Situação</th>
                                <th>Cargo</th>
                                <th>Unidade</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>12345678</td>
                                <td>Kauan</td>
                                <td>
                                    <select name="situacao" id="">
                                        <option value="Concluido">Concluido</option>
                                        <option value="Em Andamento">Em andamento</option>
                                        <option value="Em Atraso">Em Atraso</option>
                                    </select>
                                </td>
                                <td>Analista de Sistemas</td>
                                <td>Planta de São Bernardo</td>
                            </tr>
                        </tbody>
                    </table>
                </Secao>
            </main>
        </>
    )
}
export default GestaoCadastro