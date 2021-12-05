import { gql } from "@apollo/client";
import client from "../apollo-client";
import ListCards from "@components/ListCards";

export default function Index({ people }) {
	return <ListCards people={people.map((p) => p.node)} />;
}

export async function getStaticProps() {
	const { data, loading, error } = await client.query({
		query: gql`
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
		`,
	});

	return {
		props: {
			people: data.allPeople.edges.slice(0, 60),
			// loading,
			// error,
		},
	};
}
