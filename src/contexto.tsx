// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext: any = createContext;

const UserProvider = ({children}: any) => {
  const [tipoUsuario, setTipoUsuario] = useState(null);

  useEffect(() => {
    // Substitua a URL pela sua API real
    fetch('sua/api/de/usuarios')
      .then(response => response.json())
      .then(data => {
        // Suponha que a API retorna um objeto com a propriedade 'userType'
        setTipoUsuario(data.tipousuario);
      })
      .catch(error => {
        console.error('Erro ao obter informações do usuário:', error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ tipoUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
