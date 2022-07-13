import React, { useState } from "react";
import Footer from "./components/footer/Footer";

export default function Register() {
  return (
    <div className="mt-5">
      <style jsx>{`
        input[type="text"],
        input[type="password"],
        input[type="tel"],
        input[type="date"],
        input[type="email"] {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          display: inline-block;
          border: none;
          background: #f1f1f1;
        }

        input[type="text"]:focus,
        input[type="password"]:focus,
        input[type="tel"]:focus,
        input[type="date"]:focus,
        input[type="email"]:focus {
          background-color: #ddd;
          outline: none;
        }

        hr {
          border: 1px solid #f1f1f1;
          margin-bottom: 25px;
        }

        .registerbtn {
          background-color: #04aa6d;
          color: white;
          padding: 16px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
          opacity: 0.9;
        }

        .registerbtn:hover {
          opacity: 1;
        }

        a {
          color: dodgerblue;
        }

        .signin {
          background-color: #f1f1f1;
          text-align: center;
        }
        hr {
          border: 1px solid #f1f1f1;
          margin-bottom: 25px;
        }
      `}</style>
      <h1 className="text-3xl font-bold font-serif text-center mb-2">
        Register
      </h1>
      <p className="text-center mb-3 font-serif">
        Please fill in this form to create an account.
      </p>
      <hr />
      <label for="email">
        <b>Email</b>
      </label>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />
      <label for="phone">
        <b>Phone Number</b>
      </label>
      <input
        type="tel"
        placeholder="Enter Phone Number"
        name="phone"
        id="phone"
        required
      />
      <label for="idcard">
        <b>ID Card</b>
      </label>
      <input
        type="text"
        placeholder="Enter ID Card"
        name="idcard"
        id="idcard"
        required
      />
      <label for="birthday">
        <b>Birthday</b>
      </label>
      <input
        type="date"
        placeholder="Enter Birthday"
        name="birthday"
        id="birthday"
        required
      />
      <label for="address">
        <b>Address</b>
      </label>
      <input
        type="text"
        placeholder="Enter Address"
        name="address"
        id="address"
        required
      />
      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />

      <label for="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required
      />
      <hr></hr>
      <button
        type="submit"
        class=" py-4 px-5 border-none bg-green-400 w-full opacity-90 my-4 mx-0 cursor-pointer hover:opacity-100 text-white text-xl"
      >
        Register
      </button>
    </div>
  );
}
