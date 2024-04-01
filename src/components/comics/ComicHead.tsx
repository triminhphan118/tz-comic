'use client';

import { FC } from 'react';
import Heading from '../Heading';
import Image from 'next/image';
import Tag from '../Tag';
import Button from '../Button';

interface ComicHeadProps {
    title?: string;
}

const ComicHead: FC<ComicHeadProps> = ({ title }) => {
    return (
        <>
            <Heading title="Title details" subtitle={`Submititle`} />
            <div className="flex justify-between gap-6 items-center">
                <div className="w-1/3 h-[300px] overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        alt="details"
                        src={'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg'}
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
                        <span className="min-w-20">Ten khac</span>
                        <span>Trong Tay Chi Vật</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-20">Tac Gia</span>
                        <span>Tien Chanh</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-20">Tinh trang</span>
                        <span>Dang tien hanh</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-20">The loai</span>
                        <span>Trong Tay Chi Vật</span>
                    </div>
                    <div className="flex">
                        <span className="min-w-20">Luot xem</span>
                        <span>Trong Tay Chi Vật</span>
                    </div>
                    <div className="flex w-fit">
                        <Button label="Doc tu dau" onClick={() => {}} />
                        <Button label="Doc chuong cuoi" onClick={() => {}} />
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-6 flex-col">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nesciunt officia quod praesentium
                    repudiandae laborum error sint, quas cum suscipit eveniet alias voluptatibus aliquid placeat
                    explicabo, odio sequi distinctio ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nesciunt officia quod praesentium repudiandae laborum error sint, quas cum suscipit eveniet alias
                    voluptatibus aliquid placeat explicabo, odio sequi distinctio ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ut nesciunt officia quod praesentium repudiandae laborum error sint,
                    quas cum suscipit eveniet alias voluptatibus aliquid placeat explicabo, odio sequi distinctio ab.
                </p>
            </div>

            <div className="flex justify-between gap-6 flex-col">
                <h2>Danh sach chuong</h2>
                <div className="p-2 border-gray-200  border rounded-xl">
                    {Array(100)
                        .fill(null)
                        .reverse()
                        .map((_, index) => {
                            return (
                                <div className="flex py-2 border-b border-dashed cursor-pointer group" key={index}>
                                    <span className="w-1/2 font-semibold group-hover:text-blue-500">
                                        {' '}
                                        Chapter {index}
                                    </span>
                                    <span className="w-1/2 text-gray-300">1 gio truoc</span>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default ComicHead;
