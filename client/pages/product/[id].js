import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

export default function Product() {
  const router = useRouter();
  const id = router.query.id;

  const { Moralis, isInitialized } = useMoralis();
  const [rsList, setRsList] = useState();
  const [pdList, setPdList] = useState([]);

  useEffect(() => {
    async function fetchSigleRsList() {
      const RealEstate = Moralis.Object.extend("RealEstate");
      const query = new Moralis.Query(RealEstate);
      const result = await query.get(id);
      let rsArray = [];

      rsArray.push({
        id: result.id,
        title: result.attributes.title,
        direct: result.attributes.direct,
        price: result.attributes.price,
        area: result.attributes.area,
        floor: result.attributes.floor,
        bedroom: result.attributes.bedroom,
        toilet: result.attributes.toilet,
        imgURL: result.attributes.imgURL,
        location: result.attributes.location,
        address: result.attributes.address,
        building: result.attributes.building,
        roomCode: result.attributes.roomCode,
      });

      setPdList(rsArray);
      setRsList(result);
    }
    if (isInitialized) {
      fetchSigleRsList();
    }
  });

  console.log(pdList);

  return (
    <div>
      {pdList.map((each) => {
        return (
          <div>
            <p>{each.id}</p>
            <p>{each.title}</p>
            <p>{each.bedroom}</p>
            <p>{each.toilet}</p>
            <p>{each.floor}</p>
            <p>{each.building}</p>
            <p>{each.price}</p>
            <p>{each.roomCode}</p>
            <p>{each.address}</p>
            <p>{each.area}</p>
            <p>{each.direct}</p>
            <p>{each.location}</p>
            <p>{each.imgURL}</p>
          </div>
        );
      })}
    </div>
  );
}
