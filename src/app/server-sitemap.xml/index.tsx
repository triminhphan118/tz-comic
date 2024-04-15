import { getComics } from '@/services/api/comic.service';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export default async function Site(ctx: any) {
    const response = await getComics({});
    const fields: ISitemapField[] = response?.items?.map((item) => ({
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/comics/${item.slug}}`,
        lastmod: new Date().toISOString(),
    }));

    return fields;
}
