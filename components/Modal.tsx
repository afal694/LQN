import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FullCharacter, Person } from "utils/interfaces";
import { gql, useQuery } from "@apollo/client";

const KeyValue = ({ name, value }) => {
	return (
		<>
			<Typography variant="body2">{`${name}: `}</Typography>
			<Typography variant="body2">{value}</Typography>
		</>
	);
};

interface ModalProps {
	open: boolean;
	onClose: () => void;
	person?: FullCharacter;
	idPerson?: string;
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

export default function Modal({ open, onClose, person, idPerson }: ModalProps) {
	const { data, loading, error } = useQuery(GET_CHARACTER, {
		variables: { peopleId: idPerson },
	});

	if (!!error) return null;
	if (!!loading) return <div>...loading</div>;

	const { people } = data;

	if (!people) return null;
	return (
		<Dialog open={open}>
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
				{/* <KeyValue name={"birthYear"} value={person.birthYear} /> */}
			</DialogContent>
		</Dialog>
	);
}
