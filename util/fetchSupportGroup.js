export const fetchSupportGroup = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSupportGroup`
    );

    if (!res.ok) return;

    const data = await res.json();
    const supportGroup = data?.supportGroup || null;

    return supportGroup;
}