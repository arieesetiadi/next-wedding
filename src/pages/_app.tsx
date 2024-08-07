import '@/styles/globals.css';

import { type AppProps } from 'next/app';
import { Playfair_Display, Italiana, Inter, DM_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { BacksoundProvider } from '@/context/backsound-context';
import QueryProvider from '@/components/providers/query.provider';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--ff-playfair',
});

const italiana = Italiana({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--ff-italiana',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--ff-inter',
});

const dmMono = DM_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--ff-dm-mono',
});

const fontVariableClasses = `${playfair.variable} ${italiana.variable} ${inter.variable} ${dmMono.variable}`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={fontVariableClasses}>
            <Toaster position="top-center" toastOptions={{ duration: 3000, style: { maxWidth: 1000 } }} />

            <QueryProvider>
                <BacksoundProvider>
                    <Component {...pageProps} />
                </BacksoundProvider>
            </QueryProvider>
        </div>
    );
}
