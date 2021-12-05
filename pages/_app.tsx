import "../styles/index.scss";
import { AppProps } from "next/app";
import Layout from "@components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
