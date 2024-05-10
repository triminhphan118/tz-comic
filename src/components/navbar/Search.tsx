'use client';
import { BiSearch } from 'react-icons/bi';
import { Input } from '../ui/input';
import { useComicsQuery } from '@/services/queries/comic.query';
import { useDebouncedState } from '@/hooks/useDebounced';
import ComicCardHorizontal from '../comics/ComicCardHorizontal';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutSide';

const Search = () => {
    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useDebouncedState('', 200);
    const { data } = useComicsQuery({ keyword: value });
    const ref = useClickOutside((el: HTMLElement) => {
        if (el?.closest('.list-search')) return;
        setIsShow(false);
    });

    return (
        <div className="border-[1px] w-full rounded-full shadow-sm md:w-auto hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm text-gray-600 flex flex-row items-center pr-1 w-full relative">
                    <Input
                        placeholder="Enter your name..."
                        className="border-none outline-none focus:shadow-none focus-visible:ring-0"
                        defaultValue={value}
                        onChange={(event) => setValue(event.currentTarget.value)}
                        onFocus={() => setIsShow(true)}
                        ref={ref}
                    />
                    <div className="p-2 bg-orange-500 rounded-full text-white">
                        <BiSearch />
                    </div>
                    {data && isShow && (
                        <div className="absolute  bg-white border w-full top-[110%] rounded-sm p-4 list-search">
                            <ScrollArea className="w-full r pt-4 max-h-[350px] overflow-auto">
                                <div
                                    className="
                                 grid
                                 grid-cols-1
                                 gap-8
                            "
                                >
                                    {data?.items?.map((item) => {
                                        // return <ComicCard key={item._id} data={item} cnd={data.APP_DOMAIN_CDN_IMAGE} />;
                                        return (
                                            <ComicCardHorizontal
                                                key={item._id}
                                                data={item}
                                                cnd={data.APP_DOMAIN_CDN_IMAGE}
                                            />
                                        );
                                    })}
                                    {!data?.items?.length && <div>Không tìm thấy kết quả</div>}
                                </div>
                            </ScrollArea>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
