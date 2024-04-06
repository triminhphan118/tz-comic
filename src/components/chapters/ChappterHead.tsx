'use client';

import { FC, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';
import { IoReorderThree } from 'react-icons/io5';
import { GiBackwardTime } from 'react-icons/gi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaHeart } from 'react-icons/fa';
import { ChapterDetails, Chapters, GetComicDetailsResponse } from '@/types/comic';
import { useRouter } from 'next/navigation';
import useGlobalStore from '@/store/useGlobalStore';
import { ScrollArea } from '@radix-ui/react-scroll-area';

interface ChappterHeadProps {
    chaptersData: ChapterDetails;
    details: GetComicDetailsResponse;
}

const ChappterHead: FC<ChappterHeadProps> = ({ chaptersData, details }) => {
    const router = useRouter();
    const comicDetails = useGlobalStore((state) => state.comicDetails);
    const [detailsState, setDetailsState] = useState(() => comicDetails || details);
    const listChapter = detailsState;
    const [numberChap, setNumberChap] = useState(() => {
        const index = listChapter.item?.chapters[0]?.server_data.findIndex(
            (item) => item.chapter_name == chaptersData?.item.chapter_name,
        );
        return index;
    });
    const [chap, setChap] = useState<Chapters | null>(null);

    useEffect(() => {
        if (numberChap >= 0) {
            const foundChap = listChapter.item?.chapters[0]?.server_data[numberChap];
            if (foundChap) {
                setChap(foundChap);
            }
        }
    }, [listChapter.item?.chapters, numberChap]);

    const handleOnclickHomeButton = () => {
        router.push('/');
    };

    const handleOptionButton = () => {
        router.back();
    };

    const handleOnclickReadButton = (type = 'next') => {
        let newNumberChap = numberChap - 1;
        if (type === 'next') {
            newNumberChap = numberChap + 1;
        }

        const foundChap = listChapter.item?.chapters[0]?.server_data[newNumberChap];
        router.push(
            `/comics/${listChapter.item.slug}/chapter/${
                foundChap.chapter_api_data.split('/')[foundChap.chapter_api_data.split('/').length - 1]
            }`,
        );
    };

    const handleClickChapter = (chapter: Chapters) => {
        if (!chapter) return;
        const chapterId = chapter.chapter_api_data.split('/')[chapter.chapter_api_data.split('/').length - 1];
        if (!chapterId) return;
        router.push(`/comics/${listChapter.item.slug}/chapter/${chapterId}`);
    };

    return (
        <>
            <div className="w-full flex-col">
                <div className="flex gap-4 items-center flex-col md:flex-row ">
                    <h3 className="underline text-blue-500">{chaptersData.item.comic_name}</h3>
                    {/* <span>[Cập nhật lúc: 13:46 21/11/2022]</span> */}
                </div>
                <div className="flex flex-col justify-center w-full text-center mt-2 bg-gray-100 rounded-sm p-4">
                    <span>Nếu không xem được truyện vui lòng đổi SERVER ẢNH bên dưới</span>
                    <div className="flex gap-2 justify-center mt-4 flex-wrap">
                        <Button>Server 1</Button>
                        <Button variant={'destructive'}>Server 2</Button>
                        <Button variant={'secondary'}>Server 3</Button>
                        <Button variant={'default'}>Server 4</Button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button variant={'default'}>
                            <IoIosWarning className="h-4 w-4" />
                            Server 4
                        </Button>
                    </div>
                </div>
                <span className="flex gap-1 items-center justify-center mt-4 bg-blue-100 rounded-sm p-4">
                    <RiErrorWarningFill />
                    Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter
                </span>

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
            </div>
        </>
    );
};

export default ChappterHead;
