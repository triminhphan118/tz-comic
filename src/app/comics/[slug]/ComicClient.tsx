'use client';

import Container from '@/components/Container';
import ComicHead from '@/components/comics/ComicHead';
import { useComicDetailsQuery } from '@/services/queries/comic.query';
import useGlobalStore from '@/store/useGlobalStore';
import { GetComicDetailsResponse } from '@/types/comic';
import { FC, useEffect } from 'react';

interface ComicClientProps {
    slug?: string;
    details?: GetComicDetailsResponse;
}

const ComicClient: FC<ComicClientProps> = ({ slug, details }) => {
    const { data, isLoading } = useComicDetailsQuery(slug ?? '');
    const setComicDetails = useGlobalStore((state) => state.setComicDetails);

    useEffect(() => {
        if (data) setComicDetails(data);
    }, [data, setComicDetails]);

    if (!details && !data) return null;

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ComicHead
                        details={details?.item || data?.item}
                        cnd={details?.APP_DOMAIN_CDN_IMAGE || data?.APP_DOMAIN_CDN_IMAGE}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ComicClient;
