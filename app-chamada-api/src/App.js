// vamos importar o hooks useEffect = para carregar a lista de usuarios vinda da api
// e importar a useState = para modificar as varaveis em tempo real
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

// alterando o array para pegar na api
// a const= criamos uma variavel users e usamos o setUsers para atribuir valores de forma dinamicamente nela
      const [ users, setUsers] = useState([]);

//  o useEffect serve para executal a consulta com a lib axios, toda vez que acessar a pagina,o use vai chamr a consulta 
// e quando terminar vai atribuir esse carregamento ao setUsers
      useEffect(() => {
        axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then(resposta => {
          setUsers(resposta.data.users);
        }).catch(error => console.log(error));
      },[])

  return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de criação</th>
            </tr>
          </thead>
          <tbody>
{/* Para utilizarmos javascript dentro do html do react, ele deve estar entre chaves {}
vamos utilizzar a função map do javascript =  invoca a função callback (passada por argumento) para cada elemento do Array e devolve um novo Array como resultado. */}
            { users.map(user => {
            return  <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <th>{user.created_at}</th>
                    </tr>
              })}
          </tbody>
        </table>
      </div>
  );
}

export default App;
