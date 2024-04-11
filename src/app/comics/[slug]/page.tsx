import ClientOnly from '@/components/ClientOnly';
import { FC } from 'react';
import ComicClient from './ComicClient';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getComicDetails } from '@/services/api/comic.service';

interface IParams {
    params: { slug: string };
}

export async function generateMetadata({ params }: IParams) {
    const { slug } = params;
    const details = await getComicDetails(slug);
    return {
        title: details.seoOnPage.titleHead,
        description: details.seoOnPage.descriptionHead,
    };
}

const ComicPage: FC<IParams> = async ({ params }) => {
    const { slug } = params;
    const details = await getComicDetails(slug);
    console.log(details);
    // const queryClient = new QueryClient();
    // await queryClient.prefetchQuery({
    //     queryKey: ['getComicDetails', slug],
    //     queryFn: async () => getComicDetails(slug),
    // });
    // const details
    // if (!details) {
    //     return (
    //         <ClientOnly>
    //             <EmptyState />
    //         </ClientOnly>
    //     );
    // }

    return (
        // <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientOnly>
            <ComicClient slug={slug} details={details} />
        </ClientOnly>
        // </HydrationBoundary>
    );
};

export default ComicPage;
