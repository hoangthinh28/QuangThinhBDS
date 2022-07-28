import React, { useState, useEffect } from "react";
import MainProduct from "./components/feature/MainProduct";
import Axios from "axios";
import RealEstatePage from "./components/feature/RealEstatePage";

export default function RealEstate() {
  const [pdList, setPdList] = useState([]);

  useEffect(() => {
    fetchRsList();
  }, []);

  async function fetchRsList() {
    let promise = Axios({
      url: "http://localhost:5000/api/realEstate/",
      method: "GET",
    });
    promise
      .then((rs) => {
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
      <RealEstatePage data={pdList} />
    </div>
  );
}
