'use client';

import { FC } from 'react';

interface HeadingProps {
    title: string;
    subtitle: string;
}

const Heading: FC<HeadingProps> = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
                {title}
            </h2>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{subtitle}</p>
        </div>
    );
};

export default Heading;
