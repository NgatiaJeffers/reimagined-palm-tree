export const fetchEvent = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEventData?query=${slug}`
    );

    if (!res.ok) return;

    const data = await res.json();
    const event = data.event || null

    return event;
}