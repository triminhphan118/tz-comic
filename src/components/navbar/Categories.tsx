'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from '../CategoryBox';
import Container from '../Container';
import { CategoriesReponse } from '@/types/category';
import { FC } from 'react';

interface CategoriesProps {
    categories?: CategoriesReponse;
}
const Categories: FC<CategoriesProps> = ({ categories }) => {
    const params = useSearchParams();
    const categoryParam = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname !== '';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-auto gap-2">
                {categories?.items.map((category) => {
                    return (
                        <CategoryBox
                            key={category._id}
                            label={category.name}
                            selected={categoryParam === category.slug}
                            slug={category.slug}
                        />
                    );
                })}
            </div>
        </Container>
    );
};

export default Categories;
