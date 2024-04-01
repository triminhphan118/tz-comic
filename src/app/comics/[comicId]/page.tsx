import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import { FC } from 'react';
import ComicClient from './ComicClient';

interface IParams {
    comicId?: string;
}

const ComicPage: FC<IParams> = ({ comicId }) => {
    // const details
    // if (!details) {
    //     return (
    //         <ClientOnly>
    //             <EmptyState />
    //         </ClientOnly>
    //     );
    // }

    console.log('comicId::', comicId);
    return (
        <ClientOnly>
            <ComicClient></ComicClient>
        </ClientOnly>
    );
};

export default ComicPage;
