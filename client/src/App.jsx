import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';

// Set up the connection to the GraphQL API server.
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up the authorization context for Apollo Client.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the Apollo Client instance with the auth link and HTTP link.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // Note that StoreProvider has been removed.
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
