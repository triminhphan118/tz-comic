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
import useActionBar from '@/hooks/useActionBar';
import SidebarAction from './SidebarAction';

interface ChappterHeadProps {
    chaptersData: ChapterDetails;
    listChapter: GetComicDetailsResponse;
    numberChap: number;
    chap: Chapters | null;
}

const ChappterHead: FC<ChappterHeadProps> = ({ chaptersData, chap, listChapter, numberChap }) => {
    const { handleClickChapter, handleOnclickHomeButton, handleOnclickReadButton, handleOptionButton } = useActionBar(
        numberChap,
        listChapter,
    );

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
                <SidebarAction
                    chap={chap}
                    chaptersData={chaptersData}
                    listChapter={listChapter}
                    numberChap={numberChap}
                />
            </div>
        </>
    );
};

export default ChappterHead;
