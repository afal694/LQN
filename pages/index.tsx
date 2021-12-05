import { gql } from "@apollo/client";
import client from "../apollo-client";
import ListCards from "@components/ListCards";
import Modal from "@components/Modal";
import { useRouter } from "next/router";

export default function Index({ people }) {
	const router = useRouter();
	return (
		<>
			<ListCards people={people.map((p) => p.node)} />
			<Modal
				open={!!router.query.id}
				onClose={() => {
					router.push("/");
				}}
				idPerson={String(router.query.id)}
			/>
		</>
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
			people: data.allPeople.edges,
			// loading,
			// error,
		},
	};
}
