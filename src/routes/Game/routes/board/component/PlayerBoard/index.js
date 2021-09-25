import React, { useState } from "react";
import PokemonCard from "../../../../../../components/pokemonCard/PokemonCard";
import s from "./style.module.css";
import cn from "classnames";

const PlayerBoard = ({ cards, onClickCard, player }) => {
	const [isSelected, setSelected] = useState(null);
	return (
		<>
			{cards.map(card => (
				<div
					key={card.id}
					className={cn(s.cardBoard, {
						[s.selected]: isSelected === card.id,
					})}
					onClick={() => {
						setSelected(card.id);
						onClickCard &&
							onClickCard({
								player,
								...card,
							});
					}}
				>
					<PokemonCard
						className={s.card}
						isRotate={true}
						key={card.id}
						name={card.name}
						id={card.id}
						type={card.type}
						img={card.img}
						values={card.values}
						minimize
					/>
				</div>
			))}
		</>
	);
};
export default PlayerBoard;
