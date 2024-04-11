export interface GetComicResponse {
    items: ComicReponse[];
    seoOnPage: SeoOnPage;
    params: Params;
    type_list: string;
    APP_DOMAIN_FRONTEND: string;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface GetComicDetailsResponse {
    item: ComicReponse;
    seoOnPage: SeoOnPage;
    params: Params;
    type_list: string;
    APP_DOMAIN_FRONTEND: string;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface ComicReponse {
    _id: string;
    name: string;
    slug: string;
    origin_name: string[];
    status: string;
    thumb_url: string;
    sub_docquyen: boolean;
    category: Category[];
    updatedAt: string;
    chapters: {
        server_name: string;
        server_data: Chapters[];
    }[];
    author: string[];
    content: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Chapters {
    filename: string;
    chapter_name: string;
    chapter_title: string;
    chapter_api_data: string;
}

export interface SeoOnPage {
    titleHead: string;
    descriptionHead: string;
    og_type: string;
    og_image: string[];
}

export interface Params {
    type_slug: string;
    filterCategory: any[];
    sortField: string;
    pagination: Pagination;
    itemsUpdateInDay: number;
}

export interface Pagination {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    pageRanges: number;
}

export interface GetComicsProps {
    page?: number;
    category?: string;
}

export interface GetComicsByKeyWordProps {
    keyword?: string;
}

export interface ChapterDetails {
    domain_cdn: string;
    item: ItemChapter;
}

export interface ItemChapter {
    chapters: any;
    _id: string;
    comic_name: string;
    chapter_name: string;
    chapter_title: string;
    chapter_path: string;
    chapter_image: ChapterImage[];
}

export interface ChapterImage {
    image_page: number;
    image_file: string;
}
