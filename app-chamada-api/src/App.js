function App() {

// vamos criar um array para deixar a tabela dinamica, para prepara-la para a api
// vamos criar um array javascript
// os atributos pegamos como mostrado na api

  const lista_users = [
    
      {name: "User1", email: "user1.teste@gmail.com", created_at: "2022-02-02"},
      {name: "User2", email: "user2.teste@gmail.com", created_at: "2022-04-12"},
      {name: "User34", email: "user34.teste@gmail.com", created_at: "2022-05-10"},
  
  ]
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
            { lista_users.map(user => {
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
