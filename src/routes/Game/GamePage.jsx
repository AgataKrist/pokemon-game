import React, { useState, useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";
import BoardPage from "./routes/board/Board";
import FinishPage from "./routes/finish/Finish";
import StartPage from "./routes/start/Start";

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
	const [selectedPokemons2, setSelectedPokemons2] = useState({});

	useEffect(async () => {
		const player2Response = await fetch(
			"https://reactmarathon-api.netlify.app/api/create-player"
		);
		const player2Request = await player2Response.json();

		setSelectedPokemons2(() => {
			return player2Request.data.map(item => ({
				...item,
				possession: "red",
			}));
		});
	}, []);
	const match = useRouteMatch();
	const handleSelectedPokemon = (key, pokemon) => {
		setSelectedPokemons(prevState => {
			if (prevState[key]) {
				const copyState = { ...prevState };
				delete copyState[key];

				return copyState;
			}
			return {
				...prevState,
				[key]: pokemon,
			};
		});
	};

	const onClearPokemon = () => {
		setSelectedPokemons({});
		setSelectedPokemons2({});
	};
	return (
		<PokemonContext.Provider
			value={{
				pokemons: selectedPokemons,
				onSelectedPokemons: handleSelectedPokemon,
				pokemons2: selectedPokemons2,
				clearPokemon: onClearPokemon,
			}}
		>
			<Switch>
				<Route
					path={`${match.path}/`}
					exact
					component={StartPage}
				></Route>
				<Route
					path={`${match.path}/board`}
					exact
					component={BoardPage}
				></Route>
				<Route
					path={`${match.path}/finish`}
					exact
					component={FinishPage}
				></Route>
			</Switch>
		</PokemonContext.Provider>
	);
};

export default GamePage;
