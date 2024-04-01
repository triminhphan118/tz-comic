import { api } from '@/lib/api';
import { CategoriesReponse } from '@/types/category';

export const getCategories = async (): Promise<CategoriesReponse> => {
    const { data } = await api.get<CategoriesReponse>(`/the-loai`);
    return data;
};
