import React from "react";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import GarageIcon from "@mui/icons-material/Garage";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ShowerIcon from "@mui/icons-material/Shower";
export default function End() {
  return (
    <div className="max-width w-full pr-4 pl-4 mr-auto ml-auto pt-14">
      <div className="flex flex-wrap -mr-4 -ml-4 items-center">
        <div className="col-lg-4">
          <ul className="pl-0 list-none">
            <li>
              <a href="#" className="flex items-center pl-48">
                <span className="inline-block w-16 h-16 bg-white relative mr-5 rounded-full">
                  <span className="flex items-center justify-center rounded-full bg-white w-16 h-16 top-14 left-14 text-amber-600 text-3xl">
                    <HotelRoundedIcon fontSize="large" />
                  </span>
                </span>
                <span className="text-black text-base line-height">
                  Right at the coast of the Semantics<br></br> Vokalia and
                  Consonantia
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center pl-48 pt-8">
                <span className="inline-block w-16 h-16 bg-white relative mr-5 rounded-full">
                  <span className="flex items-center justify-center rounded-full bg-white w-16 h-16 top-14 left-14 text-amber-600 text-3xl">
                    <DomainRoundedIcon fontSize="large" />
                  </span>
                </span>
                <span className="text-black text-base line-height">
                  And if she hasn’t been rewritten then<br></br> Vokalia and
                  Consonantia
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center pl-48 pt-8">
                <span className="inline-block w-16 h-16 bg-white relative mr-5 rounded-full">
                  <span className="flex items-center justify-center rounded-full bg-white w-16 h-16 top-14 left-14 text-amber-600 text-3xl">
                    <GarageIcon fontSize="large" />
                  </span>
                </span>
                <span className="text-black text-base line-height">
                  Separated they live in <br></br>Bookmarksgrove right at large
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center pl-48 pt-8">
                <span className="inline-block w-16 h-16 bg-white relative mr-5 rounded-full">
                  <span className="flex items-center justify-center rounded-full bg-white w-16 h-16 top-14 left-14 text-amber-600 text-3xl">
                    <PinDropIcon fontSize="large" />
                  </span>
                </span>
                <span className="text-black text-base line-height">
                  And if she hasn’t been rewritten then <br></br> large language
                  ocean.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center pl-48 pt-8">
                <span className="inline-block w-16 h-16 bg-white relative mr-5 rounded-full">
                  <span className="flex items-center justify-center rounded-full bg-white w-16 h-16 top-14 left-14 text-amber-600 text-3xl">
                    <ShowerIcon fontSize="large" />
                  </span>
                </span>
                <span className="text-black text-base line-height">
                  And if she hasn’t been rewritten then <br></br> Vokalia and
                  Consonantia
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0 pl-10 h-full">
          <img
            src="https://preview.colorlib.com/theme/homey/images/ximg_portrait_1.jpg.pagespeed.ic.e8w00GWuiQ.webp"
            alt="Image"
            className=" w-80 h-full max-h-screen rounded-t-lg"
          />
        </div>
        <div className="flex col-lg-4">
          <h3 className="block text-base max-h-screen mb-4 text-orange-500 pb-72 pl-7">
            Why Us
          </h3>
          <h2 className="mb-4 -ml-10 absolute text-4xl text-black font-bold pt-12 pr-28">
            We Will Help You Find<br></br> Your Home
          </h2>
          <p className="block absolute mt-0 mb-4 pt-36 pl-7 text-sm text-neutral-400">
            Far far away, behind the word mountains, far from the<br></br>{" "}
            countries Vokalia and Consonantia, there live the blind <br></br>{" "}
            texts. Separated they live in Bookmarksgrove right at the <br></br>
            coast of the Semantics, a large language ocean.
          </p>
          <p className="block absolute mt-0 mb-4 pt-60 pl-7 text-sm text-neutral-400">
            A small river named Duden flows by their place and <br></br>{" "}
            supplies it with the necessary regelialia. It is a <br></br>{" "}
            paradisematic country, in which roasted parts of <br></br> sentences
            fly into your mouth.
          </p>
        </div>
      </div>
    </div>
  );
}
