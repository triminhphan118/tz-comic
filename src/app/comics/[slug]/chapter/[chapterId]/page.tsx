import ClientOnly from '@/components/ClientOnly';
import { FC } from 'react';
import ChapterClient from './ChapterClient';
import { getChapterComic, getComicDetails } from '@/services/api/comic.service';
import EmptyState from '@/components/EmptyState';

interface IParams {
    params: { chapterId: string; slug: string };
}

export async function generateMetadata({ params }: IParams) {
    const { slug } = params;
    const details = await getComicDetails(slug);
    return {
        title: details.seoOnPage.titleHead,
        description: details.seoOnPage.descriptionHead,
    };
}

const ChapterPage: FC<IParams> = async ({ params }) => {
    const { chapterId, slug } = params;
    const chaptersData = await getChapterComic(chapterId);
    const details = await getComicDetails(slug);

    if (!chaptersData) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <div className="bg-black">
                <ChapterClient chaptersData={chaptersData} details={details} />
            </div>
        </ClientOnly>
    );
};

export default ChapterPage;
