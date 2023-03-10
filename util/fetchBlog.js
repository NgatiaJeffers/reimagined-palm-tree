export const fetchBlog = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlog`
    );

    if (!res.ok) return;

    const data = await res.json();
    const blog = data?.blog || null;

    return blog;
}