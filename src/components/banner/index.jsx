import React, { useEffect, useState } from "react";
import { instance } from "../../axios/instance";
import BannerButton from "../buttons/BannerButton";
import NavBar from "../nav_bar";

const image_base_url = import.meta.env.VITE_IMAGE_BASE_URL;
const netflix_logo = image_base_url + "/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

const HomeBanner = ({ api }) => {
  const [bannerData, setBannerData] = useState({});
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    const getBannerMovieData = async () => {
      const response = await instance.get(api);
      const randomMovieData = Math.floor(
        Math.random() * response.data.results.length + 1
      );
      setBannerImage(
        image_base_url + response?.data?.results[randomMovieData]?.backdrop_path
      );
      setBannerData(response.data.results[randomMovieData]);
    };
    getBannerMovieData();
  }, [api]);

  return (
    <div
      className={`relative  h-screen max-h-[520px] `}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <NavBar logo_url={netflix_logo} />

      <div className="h-full flex flex-col  justify-center max-w-7xl mx-auto px-4  ">
        <h1 className="text-white text-3xl font-bold mb-1">
          {bannerData?.name || bannerData?.original_name}
        </h1>

        <div className="flex gap-4">
          <BannerButton label={"Play"} />
          <BannerButton label={"MyList"} />
        </div>
        <p className="text-white text-sm mt-3 max-w-md">{`${
          bannerData?.overview?.length > 200
            ? bannerData?.overview.slice(0, 200) + " ..."
            : bannerData?.overview
        }`}</p>
      </div>
      <div className=" absolute bottom-0 h-20 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0)]" />
    </div>
  );
};

export default HomeBanner;
