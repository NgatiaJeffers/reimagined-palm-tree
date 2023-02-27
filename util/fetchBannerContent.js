export const fetchBannerContent = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBannerContent`
    );

    if (!res.ok) return;

    const data = await res.json();
    const BannerContent = data.bannerImage || null;

    return BannerContent;
}