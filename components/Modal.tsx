import {
	Button,
	Chip,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Icon,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Film, FullCharacter, Person } from "utils/interfaces";
import { gql, useQuery } from "@apollo/client";
import {
	AccountCircle,
	Face,
	LocalMovies,
	Place,
	Public,
} from "@mui/icons-material";

interface MovieProps {
	movie: Film;
}

const Movie: React.FC<MovieProps> = ({
	movie: {
		node: { title, director, planets },
	},
}) => {
	return (
		<div className="movie">
			<Typography variant="subtitle1">{title}</Typography>
			<div className="chips-container">
				<Chip
					label={director.name}
					className="director"
					size="small"
					variant="outlined"
					icon={
						<Tooltip title="Director">
							<AccountCircle />
						</Tooltip>
					}
				/>
				{planets.edges.map(({ node: { name } }) => (
					<Chip
						key={name}
						label={name}
						className="planet"
						size="small"
						variant="outlined"
						icon={
							<Tooltip title="Planet">
								<Public />
							</Tooltip>
						}
					/>
				))}
			</div>
		</div>
	);
};

interface MoviesProps {
	person: FullCharacter;
}

const Movies: React.FC<MoviesProps> = ({ person }) => {
	console.info({ person });

	return (
		<div className="movies">
			<div className="divider">
				<span>Movies</span>
			</div>
			{!!person.films.edges &&
				person.films.edges.map((n) => <Movie movie={n} key={n.node.id} />)}
		</div>
	);
};

interface ValueComponentProps {
	title: string;
	value: string;
}

const ValueComponent: React.FC<ValueComponentProps> = ({ title, value }) => {
	return (
		<div className="value-component">
			<span className="title">{`${title}: ${value}`}</span>
		</div>
	);
};

interface MetaCharacterProps {
	person: FullCharacter;
}

const MetaCharacter: React.FC<MetaCharacterProps> = ({ person }) => {
	return (
		<div className="meta-character">
			<ValueComponent title={"Birth Year"} value={person.birthYear} />
			<ValueComponent
				title={"Mass"}
				value={`${person.mass} ${person.mass !== "unknown" ? "kg" : ""}`}
			/>
			<ValueComponent
				title={"Height"}
				value={`${person.height} ${person.height !== "unknown" ? "cm" : ""}`}
			/>
			<ValueComponent title={"Eye color"} value={person.eyeColor} />
		</div>
	);
};

interface ModalProps {
	open: boolean;
	onClose: () => void;
	person?: FullCharacter;
	idPerson?: string;
}

export default function Modal({ open, onClose, person, idPerson }: ModalProps) {
	const { data, loading, error } = useQuery(GET_CHARACTER, {
		variables: { peopleId: idPerson },
	});

	if (!!error) return null;
	if (!!loading) return <div>...loading</div>;

	const { people } = data;
	if (!people) return null;
	return (
		<Dialog open={open} className="character-dialog">
			<DialogTitle>
				{people.name}
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
					}}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<MetaCharacter person={people} />
				<Movies person={people} />
			</DialogContent>
		</Dialog>
	);
}

const GET_CHARACTER = gql`
	query character($peopleId: ID!) {
		people(id: $peopleId) {
			id
			name
			birthYear
			created
			eyeColor
			height
			mass
			films {
				edges {
					node {
						id
						title
						releaseDate
						director {
							name
						}
						planets {
							edges {
								node {
									name
								}
							}
						}
					}
				}
			}
		}
	}
`;
