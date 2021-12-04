import { useRouter } from "next/router";

export default function Character({}) {
	const {
		query: { id },
	} = useRouter();

	return <div>Character {id}</div>;
}
