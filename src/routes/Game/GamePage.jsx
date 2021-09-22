import React, { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";
import BoardPage from "./routes/board/Board";
import FinishPage from "./routes/finish/Finish";
import StartPage from "./routes/start/Start";

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
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
	return (
		<PokemonContext.Provider
			value={{
				pokemons: selectedPokemons,
				onSelectedPokemons: handleSelectedPokemon,
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
					path={`${match.path}/board`}
					exact
					component={FinishPage}
				></Route>
			</Switch>
		</PokemonContext.Provider>
	);
};

export default GamePage;
