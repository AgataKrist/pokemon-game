import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import s from "./style.module.css";
import { useContext } from "react/cjs/react.development";
import PokemonCard from "../../../../components/pokemonCard/PokemonCard";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

const StartPage = () => {
	const firebase = useContext(FireBaseContext);
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});
	const pokemonsContext = useContext(PokemonContext);

	useEffect(() => {
		firebase.getPokemonSocket(pokemons => {
			setPokemons(pokemons);
		});

		return () => firebase.offPokemonSocket();
	}, []);

	const handlerChangeSelected = key => {
		const pokemon = { ...pokemons[key] };
		pokemonsContext.onSelectedPokemons(key, pokemon);
		setPokemons(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			},
		}));
	};

	const handlerClick = () => {
		history.push("/");
	};
	const handleStartGame = () => {
		history.push("/game/board");
	};
	return (
		<>
			<>
				<div className={s.button_Wrapp}>
					<button
						onClick={handleStartGame}
						disabled={
							Object.keys(pokemonsContext.pokemons).length < 5
						}
						style={{ position: "relative" }}
					>
						START GAME
					</button>
				</div>
				<div className={s.grid}>
					{Object.entries(pokemons).map(
						([key, { id, name, type, img, values, selected }]) => (
							<PokemonCard
								className={s.card}
								objID={key}
								isSelected={selected}
								//prettier-ignore
								onClick={() => {
									if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
										handlerChangeSelected(key);
									}
								}}
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
				<div className={s.button_Wrapp}>
					<button
						style={{ position: "relative" }}
						onClick={handlerClick}
					>
						HomePage
					</button>
				</div>
			</>
		</>
	);
};

export default StartPage;
