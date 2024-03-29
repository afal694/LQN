import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Person } from "../utils/interfaces";
import React from "react";

interface CharacterCardProps {
	character: Person;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
	character,
}: CharacterCardProps) => {
	const { name, id } = character;

	return (
		<Card variant="outlined" className="character-card">
			<CardContent>
				<Typography>{name}</Typography>
			</CardContent>
			<CardActions>
				<Link href={`/?id=${id}`} as={`/characters/${id}`}>
					<Button size="small" variant="outlined" color="primary">
						See more
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default CharacterCard;
