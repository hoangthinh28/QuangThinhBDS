import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Product() {
  const [reList, setReList] = useState([]);

  useEffect(() => {
    fetchReList();
  }, []);
  async function fetchReList() {
    let promise = Axios({
      url: "http://localhost:5000/api/realEstate/",
      method: "GET",
    });
    promise
      .then((rs) => {
        setReList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Sidebar />
      <div class="flex justify-center ml-64 -mt-96 mb-28 h-full">
        <div class="float-right w-4/5 -mt-28 -mb-2">
          <div class="overflow-x-auto -mt-28 w-full ">
            <table class=" w-full ">
              <thead>
                <tr>
                  <th class="border-2 border-black ">ID</th>
                  <th class="border-2 border-black ">Title</th>
                  <th class="border-2 border-black">Price</th>
                  <th class="border-2 border-black ">ethAddress</th>
                </tr>
              </thead>
              {reList.map((each) => (
                <tbody>
                  <tr key={each.RealEstateId}>
                    <td class="border-2 border-black text-center">
                      {each.RealEstateId}
                    </td>
                    <td class="border-2 border-black hover:bg-cyan-500">
                      <Link
                        href="/admin/product/[id]"
                        as={`/admin/product/${each.RealEstateId}`}
                      >
                        <a>
                          <h3>{each.Title}</h3>
                        </a>
                      </Link>
                    </td>
                    <td class="border-2 border-black">{each.Price}</td>
                    <td class="border-2 border-black pr-4">
                      {each.ethAddress}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
