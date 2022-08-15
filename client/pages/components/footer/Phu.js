import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
export default function Product() {
  return (
    <div className="max-width w-full pr-4 pl-4 mr-auto ml-auto">
      <div className="flex flex-wrap -mr-4 -ml-4 justify-center text-center">
        <div className="col-lg-6 mb-5">
          <h2 className="text-green-500 text-xl">
            We will help you find your home
          </h2>
          <p className="text-gray-600 text-xs">
            Far far away, behind the word mountains, far from the countries
            Vokalia and<br></br> Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
        <div className="col-lg-10 ">
          <div className="flex flex-wrap -mr-4 -ml-4 ">
            <div className="col-6 col-lg-3 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="relative mb-5 inline-block">
                  <span className="text-5xl text-green-700">
                    <ApartmentIcon fontSize="large" />
                  </span>
                </div>
                <div>
                  <h3>
                    <a href="#">The Word Mountains</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5 mb-lg-0 pl-10 pr-10">
              <div className="text-center">
                <div className="relative mb-5 inline-block">
                  <span className="text-5xl text-green-700">
                    <BathtubIcon fontSize="large" />
                  </span>
                </div>
                <div>
                  <h3>
                    <a href="#">The Word Mountains</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5 mb-lg-0 pr-10">
              <div className="text-center">
                <div className="relative mb-5 inline-block">
                  <span className="text-5xl text-green-700">
                    <HotelIcon fontSize="large" />
                  </span>
                </div>
                <div>
                  <h3>
                    <a href="#">The Word Mountains</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="relative mb-5 inline-block">
                  <span className="text-5xl text-green-700">
                    <HouseIcon fontSize="large" />
                  </span>
                </div>
                <div>
                  <h3>
                    <a href="#">The Word Mountains</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
