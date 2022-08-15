import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handleChangePassword = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="mt-12 mb-12 h-full">
      <style>{`
        input[tstyle jsxype="text"],
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
      <h1 className="text-3xl font-bold font-serif text-center mb-2">Login</h1>
      <p className="text-center mb-3 font-serif">
        Please fill in this form to login.
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

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type={passwordType}
        onChange={handleChangePassword}
        value={passwordInput}
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />
      <button onClick={togglePassword} className="absolute right-5 p-5">
        {passwordType === "password" ? (
          <FontAwesomeIcon icon={faEyeSlash} className="text-gray pr-2.5" />
        ) : (
          <FontAwesomeIcon icon={faEye} className="text-gray pr-2.5" />
        )}
      </button>
      <hr></hr>
      <button
        type="submit"
        className=" py-4 px-5 border-none bg-green-400 w-full opacity-90 my-4 mx-0 cursor-pointer hover:opacity-100 text-white text-xl"
      >
        Login
      </button>
    </div>
  );
}
