//generate user form

export default function Utilisateur() {
    const [Nom, setNom] = React.useState("");
    const [Prenom, setPrenom] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    //const [Competances, setCompetances] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
        Nom: ${Nom}
        Prenom: ${Prenom}
        Email: ${Email}
        password: ${password}

    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Form</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Nom:
        <select
          name="Nom"
          value={Nom}
          onChange={e => setNom(e.target.value)}
          required>
        </select>
      </label>

      <label>
        Prenom:
        <select
          name="Prenom"
          value={prenom}
          onChange={e => setPrenom(e.target.value)}
          required>
        </select>
      </label>
      
      </form>
    );
}
