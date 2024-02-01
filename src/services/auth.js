export const usuarioAutenticado = () => localStorage.getItem('usuario-login') !== null;

export  const Jwt = () => {

    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    return JSON.parse(window.atob(base64));
};
