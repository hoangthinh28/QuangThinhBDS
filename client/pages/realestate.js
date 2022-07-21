import React, { useState, useEffect } from "react";
import MainProduct from "./components/feature/MainProduct";
import Axios from "axios";

export default function RealEstate() {
  const [rsList, setRsList] = useState();
  const [pdList, setPdList] = useState([]);

  useEffect(() => {
    fetchRsList();
  });

  async function fetchRsList() {
    let promise = Axios({
      url: "http://localhost:5000/api/realEstate/",
      method: "GET",
    });
    promise
      .then((rs) => {
        // console.log(rs.data);
        setPdList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1 className="text-center italic font-serif mb-5 text-4xl pt-6 font-semibold">
        List Real Estate
      </h1>
      <div className="">
        {pdList.map((each) => {
          return (
            <MainProduct
              key={each.RealEstateId}
              id={each.RealEstateId}
              image={each.imgURL}
              title={each.Title}
              area={each.Area}
              room={each.MaxRoom}
              toilet={each.Toilet}
              direction={each.Direct}
              price={each.Price}
            />
          );
        })}
      </div>
    </div>
  );
}
