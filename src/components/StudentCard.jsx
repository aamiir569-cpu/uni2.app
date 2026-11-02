import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  function demanderPrenom() {
    const nouveau = prompt("Nouveau prénom :", props.prenom);
    if (nouveau && nouveau.trim()) {
      props.onModifier(props.id, nouveau.trim());
    }
  }

  return (
    <div className="card">
      <img src={props.image} alt={props.prenom} className="profile-image" />

      <h2>Fiche étudiant</h2>

      <p><strong>Nom &amp; Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Âge :</strong> {props.age} ans</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Adresse :</strong> {props.adresse}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.phone}</p>
        </>
      )}

      <button onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>
      <button onClick={demanderPrenom}>Modifier</button>
      <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>

      <a className="btn" href={`mailto:${props.email}`}>Contacter</a>
    </div>
  );
}

export default StudentCard;