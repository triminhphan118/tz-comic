'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { ComicReponse } from '@/types/comic';

interface ComicCardProps {
    data: ComicReponse;
    cnd: string;
}

const ComicCardHorizontal: FC<ComicCardProps> = ({ data, cnd }) => {
    const router = useRouter();
    return (
        <div className="col-span-1 cursor-pointer grouup" onClick={() => router.push(`/comics/${'data.slug'}`)}>
            <div className="flex gap-2 w-full">
                <div className="relative overflow-hidden rounded-md border border-gray-100 flex-shrink-0">
                    <Image
                        width={20}
                        height={20}
                        alt="Listing"
                        src={`${cnd}/uploads/comics/${data.thumb_url}`}
                        className="object-cover size-full group-hover:scale-110 transition flex-shrink-0"
                    />
                </div>
                <div className="font-semibold text-sm">{data.name}</div>
            </div>
        </div>
    );
};

export default ComicCardHorizontal;
