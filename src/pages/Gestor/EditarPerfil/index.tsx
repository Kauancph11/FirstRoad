import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"

import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"

const EditarPerfilGestor = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral backgroundColor='#42816C' toValue='/editarGestor'>
                    <LinksAsideGestor />
                </MenuLateral>
            </main>
        </>
    )
}
export default EditarPerfilGestor