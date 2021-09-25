import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import s from "./style.module.css";
import cn from "classnames";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/pokemonCard/PokemonCard";
import { useHistory } from "react-router";
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = () => {
	const pokemonsContext = useContext(PokemonContext);
	const { pokemons, pokemons2 } = useContext(PokemonContext);
	const firebase = useContext(FireBaseContext);
	const [newPokemon, seNewPokemon] = useState({});
	const [isChoise, setChoise] = useState(null);

	const history = useHistory();
	if (Object.keys(pokemons).length === 0 || !pokemons2.length) {
		history.replace("/game");
	}

	const getNewPokemon = pokemon => {
		seNewPokemon(pokemon);
		setChoise(pokemon.id);
	};

	const finishGame = () => {
		firebase.getNewPokemon(newPokemon);
		pokemonsContext.clearPokemon();
		history.push("/");
	};
	return (
		<div className={s.wrapper}>
			<div className={s.grid}>
				{Object.keys(pokemons).length &&
					Object.entries(pokemons).map(
						([key, { id, name, type, img, values }]) => (
							<PokemonCard
								className={s.card}
								objID={key}
								isRotate={true}
								key={key}
								name={name}
								id={id}
								type={type}
								img={img}
								values={values}
							/>
						)
					)}
			</div>
			<button onClick={finishGame} style={{ position: "relative" }}>
				END GAME
			</button>

			<div className={s.grid}>
				{pokemons2.length &&
					pokemons2.map(pokemon => (
						<div
							onClick={() => getNewPokemon(pokemon)}
							className={cn(s.cardWrap, {
								[s.choice]: isChoise === pokemon.id,
							})}
						>
							<PokemonCard
								className={s.card}
								isChoise={isChoise}
								isRotate={true}
								key={pokemon.id}
								name={pokemon.name}
								id={pokemon.id}
								type={pokemon.type}
								img={pokemon.img}
								values={pokemon.values}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default FinishPage;
