import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import Formulario from "../../../components/Formulario/Formulario"
import InputPadrao from "../../../components/InputPadrao/InputPadrao"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"

const EditarPerfilGestor = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral backgroundColor='#42816C' toValue='/editarGestor7'>
                    <LinksAsideGestor />
                </MenuLateral>
                <Formulario
                    input1={<InputPadrao
                        nameLabel="senha"
                        children="Senha"
                        placeholder="Digite a senha do colaborador"
                        type="password"
                    />}

                    input2={<InputPadrao
                        nameLabel="senha"
                        children="Confirme a senha"
                        placeholder="Confirme a senha"
                        type="password"
                    />} />
            </main>
        </>
    )
}
export default EditarPerfilGestor