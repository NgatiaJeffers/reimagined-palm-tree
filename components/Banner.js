import React, { useEffect, useState } from "react";

import style from "./Banner.module.css";
import Slider from 'react-slick';

import BannerImage from '../public/Body_Talk.jpg';
import { fetchBannerContent } from "../util/fetchBannerContent";
import Image from "next/image";

const Banner = (images) => {
    const [data, setData] = useState([
        [
            {
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://farajacancersupport.org/media/images/slide1-wide.original.jpg",
            },
            {
              id: 2,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://farajacancersupport.org/media/images/slide5-wide.original.jpg",
            },
            {
              id: 3,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://farajacancersupport.org/media/images/slide2-wide.original.jpg",
            },
        ]
    ]);


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //       .then(response => response.json())
    //       .then(data => setData(data));
    //   }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 20,
    };

    return (
        <div className={`${style.heroWrap}`} data-stellar-background-ratio="0.5">
            <div className={`row gx-0 ${style.sliderText} align-items-center justify-content-center`} data-scrollax-parent="true">
                <div className="col-md-12 text-center" data-scrollax="properties: { translateY: '70%' }">
                    {/* <Slider {...settings}>
                        <div>
                            <Image alt='' width={100} height={100} src={BannerImage} />
                        </div>
                        <div>
                            <Image alt='' width={100} height={100} src={BannerImage} />
                        </div>
                        <div>
                            <Image alt='' width={100} height={100} src={BannerImage} />
                        </div>
                    </Slider> */}
                </div>
            </div>
        </div>
    )

}

export default Banner;
