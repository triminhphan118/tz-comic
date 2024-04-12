'use client';

import Container from '@/components/Container';
import ChappterHead from '@/components/chapters/ChappterHead';
import ChappterMain from '@/components/chapters/ChappterMain';
import ChapterFooter from '@/components/chapters/ChapterFooter';
import useStickyScroll from '@/hooks/useStickyScroll';
import useGlobalStore from '@/store/useGlobalStore';
import { ChapterDetails, Chapters, GetComicDetailsResponse } from '@/types/comic';
import { FC, useEffect, useState } from 'react';

interface ChapterClientProps {
    chaptersData: ChapterDetails;
    details: GetComicDetailsResponse;
}

const ChapterClient: FC<ChapterClientProps> = ({ chaptersData, details }) => {
    const [chap, setChap] = useState<Chapters | null>(null);
    const comicDetails = useGlobalStore((state) => state.comicDetails);
    const [detailsState, setDetailsState] = useState(() => comicDetails || details);
    const listChapter = detailsState;
    const [numberChap, setNumberChap] = useState(() => {
        const index = listChapter.item?.chapters[0]?.server_data.findIndex(
            (item) => item.chapter_name == chaptersData?.item.chapter_name,
        );
        return index;
    });

    // useStickyScroll();

    useEffect(() => {
        if (numberChap >= 0) {
            const foundChap = listChapter.item?.chapters[0]?.server_data[numberChap];
            if (foundChap) {
                setChap(foundChap);
            }
        }
    }, [listChapter.item?.chapters, numberChap]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ChappterHead
                        chaptersData={chaptersData}
                        listChapter={listChapter}
                        numberChap={numberChap}
                        chap={chap}
                    />
                    <ChappterMain chaptersData={chaptersData} />
                </div>
                <ChapterFooter
                    chap={chap}
                    chaptersData={chaptersData}
                    listChapter={listChapter}
                    numberChap={numberChap}
                />
            </div>
        </Container>
    );
};

export default ChapterClient;
