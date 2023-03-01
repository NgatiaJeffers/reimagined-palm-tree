export const fetchAboutUs = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutUs`
    );

    if (!res.ok) return;

    const data = await res.json();
    const aboutContent = data?.about || null;

    return aboutContent;
}