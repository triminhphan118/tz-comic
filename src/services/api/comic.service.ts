import { api } from '@/lib/api';
import { type GetComicResponse, type GetComicsProps } from '@/types/comic';

export const getComics = async (params: GetComicsProps): Promise<GetComicResponse> => {
    const { search, page } = params;
    const { data } = await api.get<GetComicResponse>(`/home`);
    return data;
};
