import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { FaHeart } from 'react-icons/fa';
import { GiBackwardTime } from 'react-icons/gi';
import { IoHome, IoReorderThree } from 'react-icons/io5';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useActionBar from '@/hooks/useActionBar';
import { ChapterDetails, GetComicDetailsResponse, Chapters } from '@/types/comic';
import { FC } from 'react';
import { Button } from '../ui/button';

interface SidebarActionProps {
    chaptersData: ChapterDetails;
    listChapter: GetComicDetailsResponse;
    numberChap: number;
    chap: Chapters | null;
}

const SidebarAction: FC<SidebarActionProps> = ({ chaptersData, chap, listChapter, numberChap }) => {
    const { handleClickChapter, handleOnclickHomeButton, handleOnclickReadButton, handleOptionButton } = useActionBar(
        numberChap,
        listChapter,
    );
    return (
        <div className="flex gap-2 justify-center mt-4">
            <Button variant="outline" size="icon" onClick={handleOnclickHomeButton}>
                <IoHome />
            </Button>

            <Button variant="outline" size="icon" onClick={handleOptionButton}>
                <IoReorderThree />
            </Button>

            <Button variant="outline" size="icon">
                <GiBackwardTime />
            </Button>

            <Button
                variant="outline"
                size="icon"
                onClick={() => handleOnclickReadButton('prev')}
                disabled={numberChap === 0}
            >
                <MdKeyboardArrowLeft />
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">{chap && `Chapter ${chap?.chapter_name}`}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80">
                    <DropdownMenuItem>
                        <div className="grid grid-cols-2 gap-2 w-full h-80 overflow-auto">
                            {listChapter.item?.chapters[0]?.server_data?.map((chap, index) => {
                                return (
                                    <Button
                                        className="flex w-full"
                                        variant="outline"
                                        key={index}
                                        onClick={() => handleClickChapter(chap)}
                                    >
                                        <span className="font-semibold group-hover:text-blue-500">
                                            Chapter {chap.chapter_name}
                                        </span>
                                    </Button>
                                );
                            })}
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button
                variant="outline"
                size="icon"
                onClick={() => handleOnclickReadButton('next')}
                disabled={numberChap === chaptersData.item.chapter_image.length - 1}
            >
                <MdKeyboardArrowRight />
            </Button>
            <Button>
                <FaHeart className="mr-2 h-4 w-4" />
                My Heart
            </Button>
        </div>
    );
};

export default SidebarAction;
