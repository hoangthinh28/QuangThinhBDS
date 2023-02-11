import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import Carousel from "better-react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faBed,
  faBathtub,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Slider(props) {
  console.log(props.list);
  return (
    <div className="max-width w-full pr-2 pl-4 mr-auto ml-auto -mt-5">
      <div className="flex flex-wrap justify-center items-center mb-3 ">
        <div className="col-6">
          <h2 className="text-4xl text-center font-serif font-semibold text-black">
            Properties
          </h2>
        </div>
      </div>
      <div className="block w-full h-full z-10 relative ">
        <div className="relative overflow-hidden -mt-20">
          <Carousel cols={3} rows={1} gap={10} loop>
            {props.list.map((each, index) => {
              return (
                <Carousel.Item>
                  <div className="mb-10 h-full m-0 pt-20">
                    <div>
                      <img
                        src={each.imgURL}
                        alt="image real estate"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <div key={each.RealEstateId}>
                        <div>
                          <Link
                            href="/product/[id]"
                            as={`/product/${each.RealEstateId}`}
                            passHref
                          >
                            <a className="font-semibold text-xl text-left hover:underline">
                              <h3 className="text-left">{each.Title}</h3>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="flex">
                        <div>
                          <span>
                            <FontAwesomeIcon
                              icon={faChartArea}
                              className="text-gray pr-2.5"
                            />
                          </span>
                          <span>
                            {each.Area} m<sup>2</sup>
                          </span>
                        </div>
                        <div className="pl-4">
                          <span>
                            <FontAwesomeIcon
                              icon={faBed}
                              className="text-gray pr-2.5"
                            />
                          </span>
                          <span>{each.RoomCode}</span>
                        </div>
                        <div className="pl-4">
                          <span>
                            <FontAwesomeIcon
                              icon={faBathtub}
                              className="text-gray pr-2.5"
                            />
                          </span>
                          <span>{each.Toilet}</span>
                        </div>
                        <div className="pl-4">
                          <span>
                            <FontAwesomeIcon
                              icon={faCompass}
                              className="text-gray pr-2.5"
                            />
                          </span>
                          <span>{each.Direct}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-semibold text-end text-xl">
                          {each.Price} ETH
                        </h3>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
