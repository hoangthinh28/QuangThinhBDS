import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faBed,
  faBathtub,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MainProduct(props) {

  return (
    <div className="flex items-center justify-center">
      <div className="mb-10 w-2/4">
        <div>
          <img
            src={props.image}
            alt="image real estate"
            className="rounded-lg"
          />
        </div>
        <div>
          <div key={props.key}>
            <div>
              <Link href="/product/[id]" as={`/product/${props.id}`}>
                <a className="font-semibold text-xl text-left hover:underline">
                  <h3 className="text-left">{props.title}</h3>
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
          <div className="mb-4">
            <h3 className="font-semibold text-end text-xl">
              {props.price} ETH
            </h3>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
