'use client';

import Container from '@/components/Container';
import ComicHead from '@/components/comics/ComicHead';
import { FC } from 'react';

interface ComicClientProps {
    data?: any;
}

const ComicClient: FC<ComicClientProps> = ({ data }) => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ComicHead />
                </div>
            </div>
        </Container>
    );
};

export default ComicClient;
