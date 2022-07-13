import React, { useState, useEffect } from "react";
import MainProduct from "./components/feature/MainProduct";
import { useMoralis } from "react-moralis";

export default function RealEstate() {
  const { Moralis, isInitialized } = useMoralis();
  const [rsList, setRsList] = useState();
  const [pdList, setPdList] = useState([]);

  useEffect(() => {
    async function fetchRsList() {
      const RealEstate = Moralis.Object.extend("RealEstate");
      const query = new Moralis.Query(RealEstate);
      const result = await query.find();
      let rsArray = [];
      result.forEach((e) => {
        rsArray.push({
          id: e.id,
          image: e.attributes.imgURL,
          title: e.attributes.title,
          area: e.attributes.area,
          room: e.attributes.bedRoom,
          toilet: e.attributes.toilet,
          direction: e.attributes.direct,
          price: e.attributes.price,
        });
      });

      setPdList(rsArray);
      setRsList(result);
    }
    if (isInitialized) {
      fetchRsList();
    }
  });

  return (
    <div>
      <h1 className="text-center italic font-serif mb-5 text-4xl pt-6 font-semibold">
        List Real Estate
      </h1>
      <div className="">
        {pdList.map((each) => {
          return (
            <MainProduct
              key={each.id}
              id={each.id}
              image={each.image}
              title={each.title}
              area={each.area}
              room={each.room}
              toilet={each.toilet}
              direction={each.direction}
              price={each.price}
            />
          );
        })}
      </div>
    </div>
  );
}
