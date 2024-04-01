'use client';

import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import Text from '@/components/Text';
import ComicCard from '@/components/comics/ComicCard';
import Categories from '@/components/navbar/Categories';
import { useCategoryComicQuery } from '@/services/queries/category.query';
import { useComicsHomeQuery } from '@/services/queries/comic.query';

export default function Home() {
    const { data, isLoading } = useComicsHomeQuery({ page: 0, search: '' });
    const { data: categories } = useCategoryComicQuery();

    // const isEmpty = true;
    // if (isEmpty) {
    //     return (
    //         <ClientOnly>
    //             <EmptyState showReset />
    //         </ClientOnly>
    //     );
    // }
    return (
        <ClientOnly>
            <Container>
                <Text
                    classNames="mt-4"
                    text="Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên tục."
                />
            </Container>
            <Categories categories={categories} />
            <Container>
                <div
                    className="
                    pt-8
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                    "
                >
                    {data?.items?.map((item) => {
                        return <ComicCard key={item._id} data={item} cnd={data.APP_DOMAIN_CDN_IMAGE} />;
                    })}
                </div>
            </Container>
        </ClientOnly>
    );
}
