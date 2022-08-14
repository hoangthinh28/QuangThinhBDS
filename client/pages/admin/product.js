import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

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
    <div className="flex">
      <Sidebar class="" />
      <div class="w-4/5 flex justify-center items-center">
        <div class="-mb-5">
          <div class="overflow-x-auto w-full ">
            <table class="w-full ">
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
                    <td class="border-2 border-black text-center px-4">
                      {each.RealEstateId}
                    </td>
                    <td class="border-2 border-black hover:bg-cyan-500 px-4">
                      <Link
                        href="/admin/product/[id]"
                        as={`/admin/product/${each.RealEstateId}`}
                      >
                        <a>
                          <h3>{each.Title}</h3>
                        </a>
                      </Link>
                    </td>
                    <td class="border-2 border-black px-4">{each.Price}</td>
                    <td class="border-2 border-black px-4">
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
