import { jwtDecode } from "jwt-decode";
import api from "../../utils/api";
import { IUser } from "./types";

export function setUserLocalStorage (user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}
export function getUserLocalStorage() {
    const json = localStorage.getItem('u')

    if(!json){
        return null;
    }

    const user = JSON.parse(json)
    return user ?? null
}

export const userDecodeToken = (theToken) => {
    const decoded = jwtDecode(theToken);
    return {role: decoded.id_tipo_usuario.titulo_tipo_usuario, }
}

export async function LoginRequest (email: string, senha: string){
    try{
        const request = await api.post("/usuarios", {email, senha})

        return request.data
    } catch (error) {
        console.log(error)
        console.log("erro na loginRequest")
        

    }
}