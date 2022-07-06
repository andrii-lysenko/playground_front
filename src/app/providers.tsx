import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import apollo from '~/api/apollo/apiGraphql';
import store from './store';

export const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ApolloProvider client={apollo}>
            <Provider store={store}>{children}</Provider>
        </ApolloProvider>
    );
};
