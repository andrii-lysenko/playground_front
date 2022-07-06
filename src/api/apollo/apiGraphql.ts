import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URL } from '~/config';

const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    credentials: 'same-origin',
});

const authMiddleware = new ApolloLink((operation, forward) => {
    return forward(operation);
});

const apollo = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
});

export default apollo;
