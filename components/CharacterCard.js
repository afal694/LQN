import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@material-ui/core";

const CharacterCard = ({ character }) => {
	console.info({ character });
	const { name } = character;
	return (
		<Card sx={{ minWidth: 275 }} className="character-card">
			<CardContent>
				<Typography sx={{ mb: 1.5 }}>{name}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default CharacterCard;
