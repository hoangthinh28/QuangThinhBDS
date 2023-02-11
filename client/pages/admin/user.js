import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchRsList();
    }
  }, [router.isReady]);

  async function fetchRsList() {
    let promise = Axios({
      url: "http://localhost:5000/api/user/",
      method: "GET",
    });
    promise
      .then((rs) => {
        setUserList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let ID = 1;

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex justify-center w-4/5 items-center pt-40">
        <div className="mt-14">
          <div className="overflow-x-auto bg-white border-2 border-black -mt-52">
            <table className=" w-full bg-white border-2 border-black ">
              <thead>
                <tr>
                  <th className="border-2 border-black">ID</th>
                  <th className="border-2 border-black">ethAddress</th>
                </tr>
              </thead>
              {userList.map((each) => (
                <tbody>
                  <tr>
                    <td className="border-2 border-black px-4 text-center">
                      {ID++}
                    </td>
                    <td className="border-2 border-black px-10">
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
