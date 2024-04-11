import { create } from 'zustand';
import { getItem, setItem } from '@/lib/localStorage';
import { logger } from './logger';
import { GetComicDetailsResponse } from '@/types/comic';

interface GlobalState {
    isMenuOpen: boolean;
    comicDetails: GetComicDetailsResponse | null;
    isStickyActionBar: boolean;
}

export interface GlobalStore extends GlobalState {
    toggleMenu: () => void;
    setComicDetails: (payload: GetComicDetailsResponse) => void;
    setToggleStickyActionBar: (payload: boolean) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
    isMenuOpen: getItem('isMenuOpen') ?? false,
    comicDetails: null,
    isStickyActionBar: false,
};

const useGlobalStore = create<GlobalStore>()(
    logger<GlobalStore>(
        (set) => ({
            ...initialState,
            toggleMenu: () => {
                set((state) => {
                    setItem('isMenuOpen', !state.isMenuOpen);
                    return { isMenuOpen: !state.isMenuOpen };
                });
            },
            setComicDetails: (payload) => {
                set(() => {
                    return { comicDetails: payload };
                });
            },
            setToggleStickyActionBar: (payload) => {
                set(() => {
                    return { isStickyActionBar: payload };
                });
            },
        }),
        'globalStore',
    ),
);

export default useGlobalStore;
