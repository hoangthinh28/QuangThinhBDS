import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faBed,
  faBathtub,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  return (
    <div>
      <div className="">
        <div>
          <img
            key={props.key}
            src={props.image}
            className="rounded"
            alt="image product"
          />
        </div>
        <div className="text-left text-xl">
          <a href={props.href}>
            <h3 className="font-semibold hover:underline">{props.title}</h3>
          </a>
        </div>
        <div className="flex font-thin text-sm">
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
              <FontAwesomeIcon icon={faBathtub} className="text-gray pr-2.5" />
            </span>
            <span>{props.toilet}</span>
          </div>
          <div className="pl-4">
            <span>
              <FontAwesomeIcon icon={faCompass} className="text-gray pr-2.5" />
            </span>
            <span>{props.direction}</span>
          </div>
        </div>
        <div className="price">
          <h3 className="font-semibold text-end	text-xl">{props.price}</h3>
        </div>
      </div>
    </div>
  );
}
