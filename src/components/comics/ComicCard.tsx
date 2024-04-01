'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import Tag from '../Tag';
import { ComicReponse } from '@/types/comic';

interface ComicCardProps {
    data: ComicReponse;
    cnd: string;
}

const ComicCard: FC<ComicCardProps> = ({ data, cnd }) => {
    const router = useRouter();
    console.log(`${cnd}/uploads/commics/${data.thumb_url}`);
    return (
        <div className="col-span-1 cursor-pointer grou" onClick={() => router.push(`/comics/${data.slug}`)}>
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-3/4 w-full relative overflow-hidden rounded-md border border-gray-100">
                    <Image
                        fill
                        alt="Listing"
                        src={`${cnd}/uploads/comics/${data.thumb_url}`}
                        className="object-cover size-full group-hover:scale-110 transition"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                        {data?.status === 'ongoing' ? (
                            <Tag title="On Going" className="bg-orange-600" />
                        ) : (
                            <>
                                <Tag title="Full" className="bg-red-600" />
                                <Tag title="Hot" className="bg-green-600" />
                                <Tag title="New" className="bg-blue-600" />
                            </>
                        )}
                    </div>
                </div>
                <div className="font-semibold text-lg">{data?.name}</div>
            </div>
        </div>
    );
};

export default ComicCard;
