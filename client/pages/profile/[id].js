import React from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export default function Profile() {
  const { Moralis, isInitialized } = useMoralis();
  const router = useRouter();




  return (
    <div>
      <div>
        <h1 className="text-center">Profile</h1>
      </div>
    </div>
  );
}
