export const fetchSponsors = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSponsors`
    );

    if(!res.ok) return;

    const data = await res.json();
    const sponsors = data?.sponsors || null;

    return sponsors;
}