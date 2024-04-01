'use client';
import { FC } from 'react';

interface TextProps {
    text: string;
    classNames?: string;
}

const Text: FC<TextProps> = ({ text, classNames }) => {
    return (
        <div className={`w-full flex justify-start items-center ${classNames || ''}`}>
            <p>{text}</p>
        </div>
    );
};

export default Text;
