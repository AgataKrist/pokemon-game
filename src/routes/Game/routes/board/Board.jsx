import { useContext } from "react/cjs/react.development";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/pokemonCard/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./Board.module.css";
import PlayerBoard from "./component/PlayerBoard";

const countWin = (player1, player2, board) => {
	let player1Count = player1.length;
	let player2Count = player2.length;

	board.forEach(item => {
		if (item.card.possession === "red") {
			player2Count++;
		}
		if (item.card.possession === "blue") {
			player1Count++;
		}
	});
	return [player1Count, player2Count];
};

const BoardPage = () => {
	const { pokemons } = useContext(PokemonContext);
	const [board, setBoard] = useState([]);
	const [player1, setPlayer1] = useState(() => {
		return Object.values(pokemons).map(pokemon => ({
			...pokemon,
			possession: "blue",
		}));
	});

	const [player2, setPlayer2] = useState([]);
	const [choiceCard, setChoiceCard] = useState(null);
	const [steps, setSteps] = useState(0);
	const history = useHistory();

	if (!Object.keys(pokemons).length) {
		history.replace("/game");
	}

	useEffect(async () => {
		const boardResponce = await fetch(
			"https://reactmarathon-api.netlify.app/api/board"
		);
		const boardRequest = await boardResponce.json();
		setBoard(boardRequest.data);
		const player2Response = await fetch(
			"https://reactmarathon-api.netlify.app/api/create-player"
		);
		const player2Request = await player2Response.json();

		setPlayer2(
			player2Request.data.map(pokemon => ({
				...pokemon,
				possession: "red",
			}))
		);
	}, []);
	const handleClickBoardPlate = async position => {
		if (choiceCard) {
			const params = {
				position,
				card: choiceCard,
				board,
			};
			const res = await fetch(
				"https://reactmarathon-api.netlify.app/api/players-turn",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(params),
				}
			);

			const request = await res.json();
			if (choiceCard.player === 1) {
				setPlayer1(prevState =>
					prevState.filter(item => item.id !== choiceCard.id)
				);
			}
			if (choiceCard.player === 2) {
				setPlayer2(prevState =>
					prevState.filter(item => item.id !== choiceCard.id)
				);
			}
			setBoard(request.data);
			setSteps(prevState => {
				const count = prevState + 1;
				return count;
			});
		}
	};
	useEffect(() => {
		if (steps === 9) {
			const [count1, count2] = countWin(player1, player2, board);
			if (count1 > count2) {
				alert("WIN");
			}
			if (count1 < count2) {
				alert("Lose");
			}
			if (count1 === count2) {
				alert("DRAWN");
			}
			history.replace("/game/finish");
		}
	}, [steps]);
	return (
		<div className={s.root}>
			<div className={s.playerOne}>
				<PlayerBoard
					player={1}
					onClickCard={card => setChoiceCard(card)}
					cards={player1}
				/>
			</div>
			<div className={s.board}>
				{board.map(item => (
					<div
						key={item.position}
						className={s.boardPlate}
						onClick={() =>
							!item.card && handleClickBoardPlate(item.position)
						}
					>
						{item.card && (
							<PokemonCard {...item.card} minimize isRotate />
						)}
					</div>
				))}
			</div>
			<div className={s.playerTwo}>
				<PlayerBoard
					player={2}
					onClickCard={card => setChoiceCard(card)}
					cards={player2}
				/>
			</div>
		</div>
	);
};

export default BoardPage;
