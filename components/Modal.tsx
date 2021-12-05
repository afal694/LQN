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
	person: FullCharacter;
}

export default function Modal({ open, onClose, person }: ModalProps) {
	console.info({ person });
	return (
		<Dialog open={open}>
			<DialogTitle>
				{person.name}
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
				<KeyValue name={"birthYear"} value={person.birthYear} />
			</DialogContent>
		</Dialog>
	);
}
