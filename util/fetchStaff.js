export const fetchStaff = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getStaff`
    );

    if (!res.ok) return;

    const data = await res.json();
    const staff = data.staff || null

    return staff
}