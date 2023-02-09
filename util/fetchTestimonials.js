export const fetchTestimonials = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonials`
    );

    if (!res.ok) return;

    const data = await res.json();
    const testimonial = data.testimonial || null;

    return testimonial;
}