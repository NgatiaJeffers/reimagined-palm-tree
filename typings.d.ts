interface BannerContent {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: "bannerImage",
    _updatedAt: string,
    mainImage: {
        _type: "image",
        asset: {
            _ref: string,
            _type: "reference",
        }
    },
    publishedAt: string,
    slug: {
        _type: "slug",
        current: "we-paint",
    },
    title: string
}