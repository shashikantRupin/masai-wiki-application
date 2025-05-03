
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/CharacterGallery.module.css";
import { themeContext } from "../context/ThemeContextProvider";

const CharacterGallery = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const context=useContext(themeContext);

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
const bg = context?.theme?.backGroundColor || "white";
  return (
    <div>
      <h2
        className={bg=="black"? styles.whiteHeader:""}
      >
        Character Gallery
      </h2>
      <div className={styles.gridContainer}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <img src={character.image} alt={character.name} />
            <h3 className={styles.text}>{character.name}</h3>
            <div className={styles.text}>Species: {character.species}</div>
            <div className={styles.text}>Status: {character.status}</div>
            <Link to={`/character/${character.id}`} target="_blank">
              view details
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
