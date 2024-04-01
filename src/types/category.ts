export interface CategoriesReponse {
    items: Category[];
}

export interface Category {
    _id: string;
    slug: string;
    name: string;
}
