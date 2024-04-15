'use client';

import { FC, useEffect } from 'react';
import { ChapterDetails } from '@/types/comic';
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
