
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/CharacterGallery.module.css";

const CharacterGallery = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  const getData=async()=>{
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const jsonData=await res.json();
      setCharacters(jsonData.results);
      setInfo(jsonData.info);
      // console.log("jsonInfo", jsonData.info);
    } catch (error) {
       console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
    <h2>Welcome to Character-Gallery</h2>
      <div className={styles.gridContainer}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <Link to={`/character/${character.id}`} target="_blank">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button disabled={!info.prev} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!info.next} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterGallery;
