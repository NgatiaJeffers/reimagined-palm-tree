export const fetchTrustee = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTrustee`
    );

    if (!res.ok) return;

    const data = await res.json();
    const trustee = data.trustee || null

    return trustee;
}