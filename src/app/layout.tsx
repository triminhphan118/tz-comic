import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/page';
import ClientOnly from '@/components/ClientOnly';
import Provider from '@/utils/Providers';

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
