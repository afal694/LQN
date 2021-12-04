import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@material-ui/core";
import Link from "next/link";

const CharacterCard = ({ character }) => {
	console.info({ character });
	const { name, id } = character;
	return (
		<Card sx={{ minWidth: 275 }} className="character-card">
			<CardContent>
				<Typography sx={{ mb: 1.5 }}>{name}</Typography>
			</CardContent>
			<CardActions>
				<Link href={`/characters/${id}`}>
					<Button size="small">Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default CharacterCard;
