import Head from "next/head";

import { gql } from "@apollo/client";
import client from "../apollo-client";
import CharacterCard from "../components/CharacterCard";
import { getStaticPaths } from "./characters/[id]";

export default function Index({ people, loading, error }) {
	return (
		<div id="index">
			<Head>
				<title>Star Wars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>Header</header>
			<aside></aside>
			<main>
				{people
					.map((p) => p.node)
					.map((p) => {
						return <CharacterCard character={p} key={p.id}/>;
					})}
			</main>
		</div>
	);
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

getStaticPaths
