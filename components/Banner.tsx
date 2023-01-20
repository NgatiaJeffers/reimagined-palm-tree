import React from "react";
import type { GetServerSideProps } from "next";

import style from "./Banner.module.css";
import { fetchBannerContent } from "../util/fetchBannerContent";

interface Props {
    images: BannerContent[];
}


const Banner = ({ images }: Props) => {
    console.log(images)

    return (
        <div className={`${style.heroWrap}`} data-stellar-background-ratio="0.5">
            <div className={`row gx-0 ${style.sliderText} align-items-center justify-content-center`} data-scrollax-parent="true">
                <div className="col-md-12 text-center" data-scrollax="properties: { translateY: '70%' }">
                    <h1 className="mb-4">We Do Yoga</h1>
                </div>
            </div>
        </div>
    )

}

export default Banner;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const images = await fetchBannerContent();

    return {
        props: {
            images,
        }
    }
}