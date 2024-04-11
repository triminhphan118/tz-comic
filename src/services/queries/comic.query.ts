import { useQuery } from '@tanstack/react-query';
import {
    ComicReponse,
    GetComicDetailsResponse,
    GetComicsByKeyWordProps,
    type GetComicResponse,
    type GetComicsProps,
} from '@/types/comic';
import { getComicDetails, getComics, searchComics } from '../api/comic.service';

export const useComicsHomeQuery = (params: GetComicsProps) =>
    useQuery<GetComicResponse>({
        queryKey: ['getComicHome', params],
        queryFn: async () => {
            const { page, category } = params;
            const query = category ? { category } : {};
            const res = await getComics({
                ...query,
                page,
            });
            return res;
        },
    });

export const useComicDetailsQuery = (slug: string) =>
    useQuery<GetComicDetailsResponse>({
        queryKey: ['getComicDetails', slug],
        queryFn: async () => getComicDetails(slug),
    });

export const useComicsQuery = (params: GetComicsByKeyWordProps) =>
    useQuery<GetComicResponse>({
        queryKey: ['getComicHome', params],
        queryFn: async () => {
            const res = await searchComics(params.keyword ?? '');
            return res;
        },
    });
