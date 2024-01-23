import { useAuth } from "../../Context/AuthProvider/useAuth"
import Login from "../../pages/Colaborador/Login"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {

    const auth = useAuth()

    if(!auth.email){
        return(
            <Login />
        )
    }
}