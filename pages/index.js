import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import HomeComponent from "../components/Home";

import { gql } from "@apollo/client";
import client from "../apollo-client";
import CharacterCard from "../components/CharacterCard";

// export default function Home({}) {
// 	return (
// 		<div>
// 			<Head>
// 				<title>Star Wars</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main>
// 				<ClientOnly>
// 					<HomeComponent />
// 				</ClientOnly>

// 			</main>
// 		</div>
// 	);
// }

export default function Index({ people, loading, error }) {
	console.info({ people });
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
						// return <div key={p.id}>{p.name}</div>;
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
