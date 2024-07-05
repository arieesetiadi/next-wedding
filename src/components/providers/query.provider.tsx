import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type Props = {
    children: ReactNode;
};

export default function QueryProvider({ children }: Props) {
    return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
}
