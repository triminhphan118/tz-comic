'use client';

import { FC } from 'react';

interface TagProps {
    title: string;
    className: string;
}

const Tag: FC<TagProps> = ({ title, className }) => {
    return <div className={`text-sm font-semibold text-white px-2 rounded-sm text-center ${className}`}>{title}</div>;
};

export default Tag;
