import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import Text from '@/components/Text';
import ComicCard from '@/components/comics/ComicCard';
import Categories from '@/components/navbar/Categories';
import { useCategoryComicQuery } from '@/services/queries/category.query';
import { useComicsHomeQuery } from '@/services/queries/comic.query';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RocketIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { getComics } from '@/services/api/comic.service';
import { getCategories } from '@/services/api/category.service';

interface IParams {
    params: { chapterId: string; slug: string; category: string };
    searchParams: { category: string };
}

const Home = async ({ params, searchParams }: IParams) => {
    const data = await getComics({
        category: searchParams?.category as string,
    });
    const categories = await getCategories();
    return (
        <ClientOnly>
            <Container>
                <Alert className="mt-4">
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên
                        tục.
                    </AlertDescription>
                </Alert>
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
};

export default Home;
