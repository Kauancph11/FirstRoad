import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import Formulario from "../../../components/Formulario/Formulario"
import InputPadrao from "../../../components/InputPadrao/InputPadrao"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"


const EditarPerfil = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Formulario
                    input1={<InputPadrao
                        nameLabel="senha"
                        children="Senha Antiga"
                        placeholder="Digite sua senha"
                        type="password"
                    />}

                    input2={<InputPadrao
                        nameLabel="senha"
                        children="Senha Nova"
                        placeholder="Digite sua senha nova"
                        type="password"
                    />}


                />


            </main>
        </>
    )
}
export default EditarPerfil