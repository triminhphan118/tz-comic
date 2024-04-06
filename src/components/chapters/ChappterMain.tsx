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
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaHeart } from 'react-icons/fa';
import { ChapterDetails, Chapters, GetComicDetailsResponse } from '@/types/comic';
import { useRouter } from 'next/navigation';
import useGlobalStore from '@/store/useGlobalStore';
import { useComicDetailsQuery } from '@/services/queries/comic.query';
import Image from 'next/image';

interface ChappterMainProps {
    chaptersData: ChapterDetails;
}

const ChappterMain: FC<ChappterMainProps> = ({ chaptersData }) => {
    return (
        <div className="w-full flex-col">
            {chaptersData?.item?.chapter_image?.map((item, index) => (
                <div key={item.image_page} className="relative mx-auto">
                    <Image
                        alt={`${item.image_page}`}
                        src={`${chaptersData.domain_cdn}/${chaptersData.item.chapter_path}/${item.image_file}`}
                        layout="responsive"
                        width={300}
                        height={300}
                        className="object-cover size-full relative"
                    />
                </div>
            ))}
        </div>
    );
};

export default ChappterMain;
