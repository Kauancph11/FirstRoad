export interface IUser {
    email?: string;
    tokem?: string
}

export interface IContext extends IUser {
    authenticate: (email: string, senha: string) => Promise<void>;
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element;
}