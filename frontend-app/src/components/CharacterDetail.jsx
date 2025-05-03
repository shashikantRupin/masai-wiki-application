// CharacterDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/Character.module.css";

const CharacterDetail = () => {
  const { id } = useParams();
 
  const [character, setCharacter] = useState(null);
  
  const getData=async()=>{
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const jsonData=await res.json();
       setCharacter(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className={styles.detailContainer}>
      <h2>Character Details</h2>
      <div className={styles.detailCard}>
        <div className={styles.imgContainer}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.detailImage}
          />
        </div>

        <div className={styles.detailInfo}>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type || "N/A"}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <p>Episodes: {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
