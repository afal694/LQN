import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
