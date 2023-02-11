import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faBed,
  faBathtub,
  faCompass,
  faEye,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Axios from "axios";

export default function SubProduct(props) {
  const updateViewedRs = (id) => {
    Axios.put(`http://localhost:5000/api/realEstate/view/${id}`);
  };

  return (
    <div>
      <div className="p-3 hover:shadow-[0_4px_0px_rgb(0,0,0)]">
        <div>
          <img
            key={props.key}
            src={props.image}
            className="rounded"
            alt="image product"
          />
        </div>
        <div className="text-left text-xl">
          <Link
            href="/product/[id]"
            as={`/product/${props.id}`}
            onClick={() => updateViewedRs(props.id)}
          >
            <a onClick={() => updateViewedRs(props.id)}>
              <h3 className="font-semibold hover:underline">{props.title}</h3>
            </a>
          </Link>
        </div>
        <div className="flex font-thin text-sm justify-between">
          <div className="flex">
            <div>
              <span>
                <FontAwesomeIcon icon={faChartArea} className=" pr-2.5" />
              </span>
              <span>
                {props.area} m<sup>2</sup>
              </span>
            </div>
            <div className="pl-4">
              <span>
                <FontAwesomeIcon icon={faBed} className="text-gray pr-2.5" />
              </span>
              <span>{props.room}</span>
            </div>
            <div className="pl-4">
              <span>
                <FontAwesomeIcon
                  icon={faBathtub}
                  className="text-gray pr-2.5"
                />
              </span>
              <span>{props.toilet}</span>
            </div>
            <div className="pl-4">
              <span>
                <FontAwesomeIcon
                  icon={faCompass}
                  className="text-gray pr-2.5"
                />
              </span>
              <span>{props.direction}</span>
            </div>
          </div>
          <div>
            <div className="pl-4">
              <span>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray pr-2.5"
                />
              </span>
              <span>{props.book}</span>
            </div>
          </div>
        </div>
        <div className="price">
          <h3 className="font-semibold text-end	text-xl">{props.price} ETH</h3>
        </div>
      </div>
    </div>
  );
}
