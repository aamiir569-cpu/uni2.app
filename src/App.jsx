import "./App.css";
import { useState } from "react";
import StudentCard from "./components/StudentCard";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import emirImg from "./assets/emir.jpg";
import chouligaImg from "./assets/chouliga.png";
import aliImg from "./assets/3li.png";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "abid",
      prenom: "emir",
      age: 20,
      email: "aamiir569@gmail.com",
      phone: "+216 23669905",
      adresse: "mahdia",
      filiere: "GLSI",
      anneeEtude: "2026/2027",
      image: emirImg,
    },
    {
      id: 2,
      nom: "chouliga",
      prenom: "chaw9i",
      age: 33,
      email: "chouliga@gmail.com",
      phone: "+216 23669906",
      adresse: "sfax",
      filiere: "iot",
      anneeEtude: "2026/2027",
      image: chouligaImg,
    },
    {
      id: 3,
      nom: "ali",
      prenom: "5lega deyra",
      age: 44,
      email: "slegadayra@gmail.com",
      phone: "+216 23669907",
      adresse: "sfax",
      filiere: "GLSI",
      anneeEtude: "2026/2027",
      image: aliImg,
    },
  ]);

  const [filtre, setFiltre] = useState("");

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "chouliga",
      prenom: "chaw9i",
      age: 33,
      email: "chouliga@gmail.com",
      phone: "+216 23669906",
      adresse: "sfax",
      filiere: "GLSI",
      anneeEtude: "2026/2027",
      image: chouligaImg,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  function modifierPrenom(id, nouveauPrenom) {
    setEtudiants(
      etudiants.map((e) =>
        e.id === id ? { ...e, prenom: nouveauPrenom } : e
      )
    );
  }

  const etudiantsAffiches = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Navbar />

      <main>
        <h2 className="titre-page">Liste des étudiants</h2>

        <div className="actions">
          <input
            type="text"
            value={filtre}
            onChange={(ev) => setFiltre(ev.target.value)}
            placeholder="Filtrer par filière"
          />
          <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        </div>

        <div className="container">
          {etudiantsAffiches.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              {...etudiant}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierPrenom}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;