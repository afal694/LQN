import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import "../styles/index.scss"

export default function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}


