import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/page';
import ClientOnly from '@/components/ClientOnly';
import Provider from '@/utils/Providers';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Provider>
                    <ClientOnly>
                        <Navbar />
                    </ClientOnly>
                    <div className="pb-20 pt-16">{children}</div>
                </Provider>
            </body>
        </html>
    );
}
