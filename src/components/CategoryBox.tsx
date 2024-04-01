import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { FC, useCallback } from 'react';
import { MdCategory } from 'react-icons/md';
import { MdAddReaction, MdNoAdultContent, MdTheaterComedy, MdFilterDrama } from 'react-icons/md';
import { SiMyanimelist } from 'react-icons/si';
import { FaBookReader } from 'react-icons/fa';
import { SiWebtoon } from 'react-icons/si';
import { MdFaceRetouchingNatural } from 'react-icons/md';
import { MdSportsMartialArts } from 'react-icons/md';
import { MdManageHistory } from 'react-icons/md';
import { IconType } from 'react-icons';

interface CategoryBoxProps {
    label: string;
    selected?: boolean;
    slug: string;
}

const SIZE = 26;

const icons = {
    action: <MdAddReaction size={SIZE} />,
    adult: <MdNoAdultContent size={SIZE} />,
    anime: <SiMyanimelist size={SIZE} />,
    comedy: <MdTheaterComedy size={SIZE} />,
    comic: <FaBookReader size={SIZE} />,
    drama: <MdFilterDrama size={SIZE} />,
    supernatural: <MdFaceRetouchingNatural size={SIZE} />,
    webtoon: <SiWebtoon size={SIZE} />,
    sports: <MdSportsMartialArts size={SIZE} />,
    historical: <MdManageHistory size={SIZE} />,
};

const CategoryBox: FC<CategoryBoxProps> = ({ label, selected, slug }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        const updateQuery: { category?: string } = {
            ...currentQuery,
            category: slug,
        };

        if (params.get('cateogry') === slug) {
            delete updateQuery.category;
        }

        const url = queryString.stringifyUrl(
            {
                url: '/',
                query: updateQuery,
            },
            {
                skipNull: true,
            },
        );

        router.push(url);
    }, [slug, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
                selected ? 'border-b-neutral-800' : 'border-transparent'
            } ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
            {icons[slug] ?? <MdCategory size={26} />}

            <div className="font-medium text-sm whitespace-nowrap">{label}</div>
        </div>
    );
};

export default CategoryBox;
