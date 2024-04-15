const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;
module.exports = {
    siteUrl,
    exclude: ['/404'],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/404', '/secret'],
            },
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [`${siteUrl}sitemap.xml`, `${siteUrl}server-sitemap.xml`],
    },
    exclude: ['/secret'],
};
