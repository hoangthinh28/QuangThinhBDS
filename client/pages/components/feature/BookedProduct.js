import React from "react";

export function BookedProduct(props) {
  return (
    <div>
      <div className="p-3 hover:shadow-[0_4px_0px_rgb(0,0,0)]">
        <div>
          <img
            key={props.key}
            src={props.imgURL}
            className="rounded"
            alt="image product"
          />
        </div>
        <div className="text-left text-lg">
          <h3 className="font-semibold">{props.RealEstateTitle}</h3>
          <p>Address: {props.Address}</p>
          <p>Room code: {props.RoomCode}</p>
        </div>
        <div className="text-left text-lg">
          <p>Check in: 14h00 {props.Checkint}</p>
          <p>Check out: 12h00 {props.Checkout}</p>
        </div>
        <div className="price">
          <h3 className="font-semibold text-end	text-xl">
            Total: {props.Price} ETH
          </h3>
        </div>
      </div>
    </div>
  );
}
