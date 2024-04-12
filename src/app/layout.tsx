import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/page';
import ClientOnly from '@/components/ClientOnly';
import Provider from '@/utils/Providers';
import Script from 'next/script';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s Đọc truyện online, đọc truyện chữ, truyện full, truyện hay',
        default: 'Đọc truyện online, đọc truyện chữ, truyện full, truyện hay',
    },
    description:
        'Đắm chìm vào thế giới phong phú của truyện với trang web. Tận hưởng những câu chuyện độc đáo, từ những cuộc phiêu lưu hấp dẫn đến những câu chuyện tình cảm sâu lắng. Khám phá và trải nghiệm ngay hôm nay! Đọc ngay miễn phí.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YVZE118MBW"></Script>
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
                </Script>
            </head>
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
