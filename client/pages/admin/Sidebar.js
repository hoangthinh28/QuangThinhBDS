import React from "react";
import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="bg-neutral-900 w-56">
      <div className="h-14 flex items-center justify-center">
        <a href="" style={{ textDecoration: "none" }}>
          <span className="text-xl bold font-bold text-white">Admin</span>
        </a>
      </div>
      <hr />
      <div className="pl-3">
        <ul className="list-none m-0 p-0 h-full">
          <p className="text-xs font-bold text-gray-50 mt-4 mb-1">MAIN</p>
          <div
            className={
              router.pathname == "/admin"
                ? "border-b-4 border-red-500 w-48 "
                : ""
            }
          >
            <a href="/admin" style={{ textDecoration: "none" }}>
              <li className="flex items-center p-1 cursor-pointer">
                <DashboardIcon className="text-lg text-white" />
                <span className="text-sm font-semibold text-gray-50 ml-3">
                  Dashboard
                </span>
              </li>
            </a>
          </div>
          <p className="text-xs font-bold text-gray-50 mt-4 mb-1">LISTS</p>
          <div
            className={
              router.pathname == "/admin/user"
                ? "border-b-4 border-red-500 w-48"
                : ""
            }
          >
            <a href="/admin/user" style={{ textDecoration: "none" }}>
              <li className="flex items-center p-1 cursor-pointer">
                <PersonOutlineIcon className="text-lg text-white" />
                <span className="text-sm font-semibold text-gray-50 ml-3">
                  Users
                </span>
              </li>
            </a>
          </div>
          <div
            className={
              router.pathname == "/admin/product"
                ? "border-b-4 border-red-500 w-48 "
                : ""
            }
          >
            <a href="/admin/product" style={{ textDecoration: "none" }}>
              <li className="flex items-center p-1 cursor-pointer">
                <StoreIcon className="text-lg text-white" />
                <span className="text-sm font-semibold text-gray-50 ml-3">
                  Real Estate
                </span>
              </li>
            </a>
          </div>
        </ul>
      </div>
      <div className="flex items-center m-3 pt-72 pl-16">
        <div
          className="w-5 h-5 rounded-md cursor-pointer m-1 bg-white"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="w-5 h-5 rounded-md cursor-pointer m-1 bg-slate-800"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
