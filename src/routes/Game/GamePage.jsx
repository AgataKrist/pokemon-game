import React, { useState } from "react";
import { useHistory } from "react-router";
import s from "./style.module.css";
import POKEMONS from "../../mock/data";
import Layout from "../../components/layout/Layout";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

const GamePage = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState(
    [...POKEMONS].map((pokemon) => {
      return {
        ...pokemon,
        isRotate: false,
      };
    })
  );

  const handlerClickRotateCard = (currentId) => {
    const newPokemons = [...pokemons].map((pokemon) => {
      if (pokemon.id === currentId) {
        pokemon.isRotate = !pokemon.isRotate;
      }
      return pokemon;
    });
    setPokemons(newPokemons);
  };

  const handlerClick = () => {
    history.push("/");
  };
  return (
    <>
      <Layout id={"Game Cards"} title={"Game Cards"} colorBg={"red"}>
        <div className={s.flex}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              onClick={handlerClickRotateCard}
              isRotate={pokemon.isRotate}
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.type}
              img={pokemon.img}
              values={pokemon.values}
            />
          ))}
        </div>
      </Layout>
      <button onClick={handlerClick}>HomePage</button>
    </>
  );
};

export default GamePage;
