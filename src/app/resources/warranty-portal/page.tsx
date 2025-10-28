"use client";

import React, { useState } from "react";

export default function Page() {
  const [uuid, setUuid] = useState("");

  type WarrantyResult = {
    status: string;
    data?: {
      dbId: string;
      serial: string;
      uuid: string;
      WarrantyDaysLeft: number;
      DaysLeftForWarrantyReg: number;
    };
    error?: string;
  } | null;

  const [result, setResult] = useState<WarrantyResult>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const checkWarranty = async () => {
    setErrorMsg("");
    setResult(null);
    try {
      const response = await fetch("/api/warranty-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid }),
      });
      const data = await response.json();
      setResult(data);
      if (data.status === "error") {
        setErrorMsg(
          data.error ||
            "There was an error checking the warranty. Please try again later."
        );
      }
    } catch {
      setErrorMsg(
        "There was an error checking the warranty. Please try again later."
      );
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1>Warranty Portal</h1>

        {!(result && result.status === "success") && (
          <>
            <input
              type="text"
              className="rounded border border-gray-300 p-2"
              placeholder="Enter warranty number"
              onChange={(e) => setUuid(e.target.value)}
            />

            <button
              onClick={checkWarranty}
              className="cursor-pointer rounded border px-3 py-1.5"
            >
              Check Warranty
            </button>
            {errorMsg && <div className="mt-2 text-red-600">{errorMsg}</div>}
          </>
        )}

        {result && result.status === "success" && result.data && (
          <div className="mt-4 rounded border bg-gray-50 p-4 text-left">
            <div>
              <strong>Database ID:</strong> {result.data.dbId}
            </div>
            <div>
              <strong>Serial:</strong> {result.data.serial}
            </div>
            <div>
              <strong>UUID:</strong> {result.data.uuid}
            </div>
            <div>
              <strong>Registration Status:</strong>{" "}
              {result.data.DaysLeftForWarrantyReg >= 0
                ? `Registered`
                : "Unregistered"}
            </div>
            <div>
              <strong>Warranty &amp; Basic Support:</strong>{" "}
              {`valid upto ${new Date(
                Date.now() + result.data.WarrantyDaysLeft * 24 * 60 * 60 * 1000
              ).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })} (${result.data.WarrantyDaysLeft} Days)`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
