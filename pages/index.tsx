import Head from "next/head";

import { gql } from "@apollo/client";
import client from "../apollo-client";
import CharacterCard from "../components/CharacterCard";
import { Person } from "../utils/interfaces";

export default function Index({ people, loading, error }) {
	return people
		.map((p) => p.node)
		.map((p: Person) => {
			return <CharacterCard character={p} key={p.id} />;
		});
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
			people: data.allPeople.edges.slice(0, 45),
			// loading,
			// error,
		},
	};
}
