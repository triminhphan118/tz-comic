import { FC } from 'react';
import SidebarAction from './SidebarAction';
import { ChapterDetails, GetComicDetailsResponse, Chapters } from '@/types/comic';

interface ChapterFooterProps {
    chaptersData: ChapterDetails;
    listChapter: GetComicDetailsResponse;
    numberChap: number;
    chap: Chapters | null;
}

const ChapterFooter: FC<ChapterFooterProps> = ({ chap, chaptersData, listChapter, numberChap }) => {
    return (
        <div className="w-full flex-col pb-12">
            <SidebarAction chap={chap} chaptersData={chaptersData} listChapter={listChapter} numberChap={numberChap} />
        </div>
    );
};

export default ChapterFooter;
