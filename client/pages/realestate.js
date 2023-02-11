import React, { useState, useEffect } from "react";
import Axios from "axios";
import RealEstatePage from "./components/feature/RealEstatePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function RealEstate() {
  const router = useRouter();
  const [pdList, setPdList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRs, setFilteredRs] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchRsList();
    }
  }, [router.isReady]);

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

  const searchData = (value) => {
    setSearchTerm(value);
    if (searchTerm !== "") {
      const filteredData = pdList.filter((item) => {
        const title = Object.values(item.Title)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return title;
      });
      setFilteredRs(filteredData);
    } else {
      setFilteredRs(pdList);
    }
  };

  return (
    <div>
      <div className="w-2/4 relative align-middle whitespace-nowrap flex justify-center items-center m-auto mt-10">
        <span className="icon">
          <FontAwesomeIcon
            icon={faSearch}
            className="z-10 absolute text-gray-900 right-28 top-3 text-xl"
          />
        </span>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          className="w-3/4 h-12  border-none text-white bg-slate-500 text-sm pl-12 rounded-md float-left"
          onChange={(e) => searchData(e.target.value)}
        />
      </div>
      <h1 className="text-center italic font-serif mb-5 text-4xl pt-6 font-semibold">
        List Real Estate
      </h1>
      {searchTerm.length > 1 ? (
        <RealEstatePage data={filteredRs} />
      ) : (
        <RealEstatePage data={pdList} />
      )}
    </div>
  );
}
