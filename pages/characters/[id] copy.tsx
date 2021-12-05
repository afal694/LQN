import { gql } from "@apollo/client";
import Modal from "@components/Modal";
import client from "apollo-client";
import { useRouter } from "next/router";

export default function Character({ person }) {
	const router = useRouter();

	return (
		<>
			<Modal
				open={true}
				onClose={() => {
					router.push("/");
				}}
				person={person}
			/>
		</>
	);
}

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
		.slice(0, 60)
		.map((p) => p.node)
		.map(({ id }) => ({ params: { id } }));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const { data } = await client.query({
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
			person: data.people,
		},
	};
}
