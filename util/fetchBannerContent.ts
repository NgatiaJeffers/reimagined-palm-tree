export const fetchBannerContent = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUPLIC_BASE_URL}/api/getBannerContent`
    );

    const data = await res.json();
    console.log(data)
    const BannerContent: BannerContent[] = data.bannerImages

    return BannerContent;
}