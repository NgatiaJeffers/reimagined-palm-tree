export const fetchTherapy = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTherapy`
    );

    if (!res.ok) return;

    const data = await res.json();
    const therapy = data?.therapy || null;

    return therapy;
}