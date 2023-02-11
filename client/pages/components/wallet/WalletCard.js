import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export default function WalletCard() {
  const { authenticate, authError } = useMoralis();

  return (
    <div>
      <button
        onClick={authenticate}
        className="p-3 bg-cyan-500 text-white rounded hover:bg-cyan-600"
      >
        Login Wallet
      </button>
      {authError && <div>{authError.message}</div>}
    </div>
  );
}
