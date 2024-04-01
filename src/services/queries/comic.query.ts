import { useQuery } from '@tanstack/react-query';
import { type GetComicResponse, type GetComicsProps } from '@/types/comic';
import { getComics } from '../api/comic.service';

export const useComicsHomeQuery = (params: GetComicsProps) =>
    useQuery<GetComicResponse>({
        queryKey: ['getComicHome', params],
        queryFn: async () => {
            const res = await getComics(params);
            return res;
        },
    });
