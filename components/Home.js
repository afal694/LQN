import { gql, useQuery } from "@apollo/client";
import { Button } from "@material-ui/core";

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

export default function Home({}) {
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
		<div className="home-page">
			<h1>People!</h1>
			<Button variant="contained">Hello World</Button>
			<div>
				<ul className="my-list">
					{people.map((p) => {
						return (
							<li className="my-item" key={p.id}>
								{p.name} - {p.gender} - {p.birthYear}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
