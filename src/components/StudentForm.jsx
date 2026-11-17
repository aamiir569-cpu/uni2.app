import { useState } from "react";

function StudentForm() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    phone: "",
    adresse: "",
    filiere: "",
    anneeEtude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom :</label>
      <input type="text" id="nom" name="nom" value={form.nom} onChange={handleChange} required />

      <label htmlFor="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" value={form.prenom} onChange={handleChange} required />

      <label htmlFor="age">Âge :</label>
      <input type="number" id="age" name="age" min="15" value={form.age} onChange={handleChange} />

      <label htmlFor="email">Email :</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

      <label htmlFor="phone">Téléphone :</label>
      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />

      <label htmlFor="adresse">Adresse :</label>
      <input type="text" id="adresse" name="adresse" value={form.adresse} onChange={handleChange} />

      <label htmlFor="filiere">Filière :</label>
      <select id="filiere" name="filiere" value={form.filiere} onChange={handleChange} required>
        <option value="">Sélectionner une filière</option>
        <option value="GLSI">GLSI</option>
        <option value="iot">IoT</option>
        <option value="irs">IRS</option>
      </select>

      <label htmlFor="anneeEtude">Année d'étude :</label>
      <input type="number" id="anneeEtude" name="anneeEtude" min="1" max="5" value={form.anneeEtude} onChange={handleChange} />

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default StudentForm;