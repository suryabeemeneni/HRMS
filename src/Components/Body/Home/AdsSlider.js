import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0%",
        },
      },
    ],
  };

  const ads = [
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1706210391355.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1707326755780.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1707412612797.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1708712448992.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1707450102710.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1709309261303.jpg",
    "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,dpr_1.25,h_432,w_1440/https://tstatic.videoready.tv/cms-ui/images/custom-content/1709309218142.jpg",
    // "",
  ];

  return (
    <>
      {/* <p style={{ marginTop: "80px" }}></p> */}
      <p style={{ marginTop: "20px" }}></p>
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index}>
            <img
              src={ad}
              style={{ height: "390px", width: "100%", cursor: "pointer" , borderRadius:'10px'}}
            />
          {/* <button style={{position:'absolute', marginTop:'-50px'}}>Book Now</button> */}
          </div>
        ))}
      </Slider>

      <p style={{ marginBottom: "50px" }}></p>
    </>
  );
};

export default AdsSlider;
