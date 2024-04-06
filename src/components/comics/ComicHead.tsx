'use client';

import { FC } from 'react';
import Heading from '../Heading';
import Image from 'next/image';
import Tag from '../Tag';
import { Chapters, ComicReponse } from '@/types/comic';
import { useRouter } from 'next/navigation';
import formatDate from '@/helpers/formatDate';
import { Button } from '../ui/button';

interface ComicHeadProps {
    details?: ComicReponse;
    cnd?: string;
}

const ComicHead: FC<ComicHeadProps> = ({ details, cnd }) => {
    const router = useRouter();
    if (!details) return null;

    const handleClickChapter = (chapter: Chapters) => {
        if (!chapter) return;
        const chapterId = chapter.chapter_api_data.split('/')[chapter.chapter_api_data.split('/').length - 1];
        if (!chapterId) return;
        router.push(`/comics/${details.slug}/chapter/${chapterId}`);
    };

    const reversedArr = details?.chapters[0]?.server_data.slice().reverse() ?? [];

    const renderStatusString = (status: string) => {
        switch (status) {
            case 'ongoing':
                return ' Đang cập nhật';
            default:
                return 'Full';
        }
    };

    const handleOnclickReadButton = (isFirst = false) => {
        if (isFirst) {
            router.push(
                `/comics/${details.slug}/chapter/${
                    reversedArr[0].chapter_api_data.split('/')[reversedArr[0].chapter_api_data.split('/').length - 1]
                }`,
            );
        } else {
            router.push(
                `/comics/${details.slug}/chapter/${
                    reversedArr[reversedArr.length - 1].chapter_api_data.split('/')[
                        reversedArr[0].chapter_api_data.split('/').length - 1
                    ]
                }`,
            );
        }
    };

    return (
        <>
            <Heading title={details.name} subtitle={formatDate(details.updatedAt)} />
            <div className="flex justify-between gap-6 items-center flex-col md:flex-row">
                <div className="w-52 h-[300px] overflow-hidden rounded-xl relative md:w-1/3">
                    <Image
                        fill
                        alt="details"
                        src={`${cnd}/uploads/comics/${details.thumb_url}`}
                        className="object-cover w-full"
                    />

                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                        <Tag title="Full" className="bg-red-600" />
                        <Tag title="Hot" className="bg-green-600" />
                        <Tag title="New" className="bg-blue-600" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="flex">
                        <span className="min-w-28">Tên Khác: </span>
                        <span>Trong Tay Chi Vật</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-28">Tác Giả: </span>
                        <span>{details.author?.join(' - ')}</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-28">Tình trạng: </span>
                        <span>{renderStatusString(details.status)}</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-28">Thể loại</span>
                        <span>{details.category?.map((item) => item.name)?.join(' - ')}</span>
                    </div>
                    <div className="flex w-fit gap-4">
                        <Button onClick={() => handleOnclickReadButton(true)}>Đọc từ đầu</Button>
                        <Button variant={'outline'} onClick={() => handleOnclickReadButton()}>
                            Đọc chương cuối
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-6 flex-col">
                <h2>Mô tả</h2>
                <p dangerouslySetInnerHTML={{ __html: details.content }} className="text-justify"></p>
            </div>

            <div className="flex justify-between gap-6 flex-col">
                <h2>Danh sách chương</h2>
                <div className="p-2 border-gray-200  border rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 justify-center">
                    {reversedArr?.map((chap, index) => {
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
            </div>
        </>
    );
};

export default ComicHead;
