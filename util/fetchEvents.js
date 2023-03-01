export const fetchEvents = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEvents`
    );

    if (!res.ok) return;

    const data = await res.json();
    const events = data.events || null

    return events
}