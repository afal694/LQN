import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
	query People {
		allPeople {
			edges {
				node {
					id
					name
					birthYear
					gender
				}
			}
		}
	}
`;

export default function People({}) {
	const { data, loading, error } = useQuery(QUERY);

	if (loading) {
		return <div>...loading</div>;
	}

	if (error) {
		console.error(error);
		return null;
	}

	const people = data.allPeople.edges.map((e) => e.node).slice(0, 30);

	return (
		<div>
			People!
			<div>
				<ul>
					{people.map((p) => {
						return <li key={p.id}>{p.name} - {p.gender} - {p.birthYear}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
