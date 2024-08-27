import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 14000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        new
        modules={[Autoplay, Pagination]}
        className="banner"
      >
        <SwiperSlide style={{ width: "100%" }}>
          <div className=" bg-[url('https://i.postimg.cc/3Jdrs5PW/pexels-pixabay-260922.jpg')] w-ful h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
              <div className="text-white pt-28">
                <h1 className=" text-3xl lg:text-5xl lg:font-bold text-center">
                Our menu brings a taste of the vibrant dishes{" "}
                </h1>
                <p className="lg:text-2xl uppercase lg:font-medium mt-7 mb-3 text-center">
                  <Typewriter
                    words={[
                      "Let us create an unforgettable experience",
                      " with one of our luxury deals.",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={90}
                    deleteSpeed={10}
                    delaySpeed={1000}
                  />
                </p>
                <div className=" w-full text-center lg:mt-12">
                  <Link to={"/allFoods"}>
                    <button className=" mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">All Foods</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "100%" }}>
          <div className=" bg-[url('https://i.postimg.cc/3J0MYK94/pexels-igor-starkov-233202-1237073.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
              <div className="text-white  pt-28">
                <h1 className=" text-3xl lg:text-5xl lg:font-bold text-center">
                Enjoy a tantalising seasonal brunch menu.{" "}
                </h1>
                <p className="lg:text-2xl uppercase lg:font-medium mt-7 mb-3 text-center">
                We are delighted to welcome you to our restaurant for an extraordinary culinary experience
                </p>
                <div className=" w-full text-center lg:mt-12">
                  <Link to={"/allFoods"}>
                    <button className=" mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">All Foods</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "100%" }}>
          <div className=" bg-[url('https://i.postimg.cc/J0qLXKDy/pexels-quark-studio-1159039-3201921.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
              <div className="text-white  pt-28">
                <h1 className=" text-3xl lg:text-5xl lg:font-bold text-center">
                  The Service is worth seeing{" "}
                </h1>
                <p className="lg:text-2xl uppercase lg:font-medium mt-7 mb-3 text-center">
                Our team welcomes you with a smile for a memorable dining experience.
                </p>
                <div className=" w-full text-center lg:mt-12">
                  <Link to={"/allFoods"}>
                    <button className=" mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">All Foods</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
