export const fetchBannerContent = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBannerContent`
    );

    const data = await res.json();
    const BannerContent = data.bannerImage

    return BannerContent;
}