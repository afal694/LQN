import { gql } from "@apollo/client";
import client from "apollo-client";

export async function getStaticPaths() {
	const { data } = await client.query({
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

	const paths = data.allPeople.edges
		.slice(0, 45)
		.map((p) => p.node)
		.map(({ id }) => ({ params: { id } }));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const { data, loading, error } = await client.query({
		query: gql`
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
		`,
		variables: {
			peopleId: params.id,
		},
	});

	return {
		props: {
			person: data,
		},
	};
}

export default function Character({ person }) {
	console.info({ person });

	return <div>Character </div>;
}
