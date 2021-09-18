import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import s from "./style.module.css";
import Layout from "../../components/layout/Layout";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import database from "../../service/firebase";

const GamePage = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  const randomID = () => {
    return Math.ceil(Math.random() * 2000);
  };

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, [pokemons]);

  const handlerClickRotateCard = (id, isActive, objID) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });

    //set in firebase. Правильно ли сделано????
    database.ref("pokemons/" + objID).set({
      ...pokemons[objID],
      active: !isActive,
    });
  };

  //Правильно ли сделано???
  const addNewPok = () => {
    const data = {
      abilities: ["keen-eye", "tangled-feet", "big-pecks"],
      base_experience: 122,
      height: 11,
      weight: 300,
      active: false,
      id: randomID(),
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      name: "pidgeotto",
      stats: {
        hp: 63,
        attack: 60,
        defense: 55,
        "special-attack": 50,
        "special-defense": 50,
        speed: 71,
      },
      type: "normal",
      values: {
        top: 7,
        right: 5,
        bottom: 1,
        left: 2,
      },
    };
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(data);
  };

  const handlerClick = () => {
    history.push("/");
  };
  return (
    <>
      <Layout id={"Game Cards"} title={"Game Cards"} colorBg={"red"}>
        <button onClick={addNewPok} style={{ position: "relative" }}>
          Add POKEMON
        </button>
        <div className={s.flex}>
          {Object.entries(pokemons).map(
            ([key, { id, name, type, img, values, active }]) => (
              <PokemonCard
                objID={key}
                onClick={handlerClickRotateCard}
                isRotate={active}
                key={id}
                name={name}
                id={id}
                type={type}
                img={img}
                values={values}
              />
            )
          )}
        </div>
        <button style={{ position: "relative" }} onClick={handlerClick}>
          HomePage
        </button>
      </Layout>
    </>
  );
};

export default GamePage;
