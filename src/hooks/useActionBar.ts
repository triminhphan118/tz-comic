import { Chapters, GetComicDetailsResponse } from '@/types/comic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useActionBar = (numberChap: number, listChapter: GetComicDetailsResponse) => {
    const router = useRouter();

    const handleOnclickHomeButton = () => {
        router.push('/');
    };

    const handleOptionButton = () => {
        router.back();
    };

    const handleOnclickReadButton = (type = 'next') => {
        let newNumberChap = numberChap - 1;
        if (type === 'next') {
            newNumberChap = numberChap + 1;
        }

        const foundChap = listChapter.item?.chapters[0]?.server_data[newNumberChap];
        if (!foundChap) return;
        router.push(
            `/comics/${listChapter.item.slug}/chapter/${
                foundChap.chapter_api_data.split('/')[foundChap.chapter_api_data.split('/').length - 1]
            }`,
        );
    };

    const handleClickChapter = (chapter: Chapters) => {
        if (!chapter) return;
        const chapterId = chapter.chapter_api_data.split('/')[chapter.chapter_api_data.split('/').length - 1];
        if (!chapterId) return;
        router.push(`/comics/${listChapter.item.slug}/chapter/${chapterId}`);
    };

    return {
        handleOnclickHomeButton,
        handleOptionButton,
        handleOnclickReadButton,
        handleClickChapter,
    };
};

export default useActionBar;
