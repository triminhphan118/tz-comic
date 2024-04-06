import { api } from '@/lib/api';
import { apiCDN } from '@/lib/apiCDN';
import {
    ChapterDetails,
    ComicReponse,
    GetComicDetailsResponse,
    type GetComicResponse,
    type GetComicsProps,
} from '@/types/comic';

export const getComics = async (params: GetComicsProps): Promise<GetComicResponse> => {
    const { search, page } = params;
    const { data } = await api.get<GetComicResponse>(`/home`);
    return data;
};

export const getComicDetails = async (slug: string): Promise<GetComicDetailsResponse> => {
    const { data } = await api.get<GetComicDetailsResponse>(`/truyen-tranh/${slug}`);
    return data;
};

export const getChapterComic = async (chapterId: string): Promise<ChapterDetails> => {
    const { data } = await apiCDN.get<ChapterDetails>(`/chapter/${chapterId}`);
    return data;
};

export const searchComics = async (keyword: string): Promise<GetComicResponse> => {
    const { data } = await api.get<GetComicResponse>(`/tim-kiem/?keyword=${keyword}`);
    return data;
};
