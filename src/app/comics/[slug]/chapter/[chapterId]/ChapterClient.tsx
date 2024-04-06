'use client';

import Container from '@/components/Container';
import ChappterHead from '@/components/chapters/ChappterHead';
import ChappterMain from '@/components/chapters/ChappterMain';
import ComicHead from '@/components/comics/ComicHead';
import { ChapterDetails, GetComicDetailsResponse } from '@/types/comic';
import { FC } from 'react';

interface ChapterClientProps {
    chaptersData: ChapterDetails;
    details: GetComicDetailsResponse;
}

const ChapterClient: FC<ChapterClientProps> = ({ chaptersData, details }) => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ChappterHead chaptersData={chaptersData} details={details} />
                    <ChappterMain chaptersData={chaptersData} />
                </div>
            </div>
        </Container>
    );
};

export default ChapterClient;
