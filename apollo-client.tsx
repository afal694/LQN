import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://swapi.loquenecesito.co/graphql/",
	cache: new InMemoryCache(),
});

export default client;
