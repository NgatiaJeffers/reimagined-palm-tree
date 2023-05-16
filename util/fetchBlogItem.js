export const fetchBlogItem = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlogItem?query=${slug}`
    );

    if (!res.ok) return;

    const data = await res.json();
    const blog = data.blog || null

    return blog;
}