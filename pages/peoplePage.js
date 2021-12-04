import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import People from "../components/People";

export default function PeoplePage() {
	return (
		<div>
			<Head>
				<title>Star Wars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Welcome !</h1>
				<ClientOnly>
					<People />
				</ClientOnly>
			</main>
		</div>
	);
}
