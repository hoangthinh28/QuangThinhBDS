import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "./Sidebar";

export default function User() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchRsList();
  }, []);

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
    <div>
      <Sidebar />
      <div class="float-right w-4/5  -mt-96 mr-6 ">
        <div class>
          <div class="overflow-x-auto bg-white border-2 border-black -mt-52">
            <table class=" w-full  bg-white border-2 border-black ">
              <thead>
                <tr>
                  <th class="border-2 border-black">ID</th>
                  <th class="border-2 border-black">ethAddress</th>
                </tr>
              </thead>
              {userList.map((each) => (
                <tbody>
                  <tr>
                    <td class="pl-8 border-2 border-black">{ID++}</td>
                    <td class="pl-80 border-2 border-black">
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
