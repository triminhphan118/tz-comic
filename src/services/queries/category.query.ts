import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/category.service';
import { CategoriesReponse } from '@/types/category';

export const useCategoryComicQuery = () =>
    useQuery<CategoriesReponse>({
        queryKey: ['getCategory'],
        queryFn: async () => {
            const res = await getCategories();
            return res;
        },
    });
