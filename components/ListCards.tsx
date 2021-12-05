import React from "react";
import { Person } from "utils/interfaces";
import CharacterCard from "./CharacterCard";

interface ListCardsProps {
	people: Person[];
}

const ListCards: React.FC<ListCardsProps> = ({ people }: ListCardsProps) => {
	return (
		<div className="list-cards">
			{people.map((p: Person) => {
				return <CharacterCard character={p} key={p.id} />;
			})}
		</div>
	);
};

export default ListCards;
