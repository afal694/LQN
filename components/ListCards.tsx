import React from "react";
import { Person } from "utils/interfaces";
import CharacterCard from "./CharacterCard";

interface ListCardsProps {
	people: Person[];
}

const ListCards: React.FC<ListCardsProps> = ({ people }: ListCardsProps) => {
	return people.map((p: Person) => {
		return <CharacterCard character={p} key={p.id} />;
	});
};

export default ListCards;
