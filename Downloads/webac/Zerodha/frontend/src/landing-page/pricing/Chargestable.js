import React, { useState } from "react";

const ChargesTable = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  const tabClass = (tab) =>
    `px-4 py-2 text-lg font-medium border-b-2 transition-colors duration-200 ${
      activeTab === tab
        ? "text-blue-600 border-blue-600"
        : "text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-400"
    }`;

  return (
    <div className="container">
      <div className="row">
        <div className="flex justify-center items-center py-8">
          <div className="w-full max-w-7xl px-4">
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-6">
              {["Equity", "Currency", "Commodity"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={tabClass(tab)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tables */}
            <div className="overflow-x-auto">
              {activeTab === "Equity" && (
                <table className="min-w-full border text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 border"> </th>
                      <th className="p-3 border">Equity delivery</th>
                      <th className="p-3 border">Equity intraday</th>
                      <th className="p-3 border">F&O - Futures</th>
                      <th className="p-3 border">F&O - Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border">Brokerage</td>
                      <td className="p-3 border">Zero Brokerage</td>
                      <td className="p-3 border">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="p-3 border">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="p-3 border">
                        Flat Rs. 20 per executed order
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">STT/CTT</td>
                      <td className="p-3 border">0.1% on buy & sell</td>
                      <td className="p-3 border">0.025% on the sell side</td>
                      <td className="p-3 border">0.02% on the sell side</td>
                      <td className="p-3 border">
                        <ul className="list-disc pl-4">
                          <li>
                            0.125% of the intrinsic value on options bought and
                            exercised
                          </li>
                          <li>0.1% on sell side (on premium)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Transaction charges</td>
                      <td className="p-3 border">
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td className="p-3 border">
                        NSE: 0.00297%
                        <br />
                        BSE: 0.00375%
                      </td>
                      <td className="p-3 border">
                        NSE: 0.00173%
                        <br />
                        BSE: 0
                      </td>
                      <td className="p-3 border">
                        NSE: 0.03503%
                        <br />
                        BSE: 0.0325%
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">GST</td>
                      <td className="p-3 border" colSpan={4}>
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">SEBI charges</td>
                      <td className="p-3 border" colSpan={4}>
                        ₹10 / crore
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Stamp charges</td>
                      <td className="p-3 border">0.015% or ₹1500 / crore</td>
                      <td className="p-3 border">0.003% or ₹300 / crore</td>
                      <td className="p-3 border">0.002% or ₹200 / crore</td>
                      <td className="p-3 border">0.003% or ₹300 / crore</td>
                    </tr>
                  </tbody>
                </table>
              )}

              {activeTab === "Currency" && (
                <table className="min-w-full border text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 border"> </th>
                      <th className="p-3 border">Currency futures</th>
                      <th className="p-3 border">Currency options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border">Brokerage</td>
                      <td className="p-3 border">
                        0.03% or ₹20/executed order whichever is lower
                      </td>
                      <td className="p-3 border">₹20/executed order</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">STT/CTT</td>
                      <td className="p-3 border">No STT</td>
                      <td className="p-3 border">No STT</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Transaction charges</td>
                      <td className="p-3 border">
                        NSE: 0.00035%
                        <br />
                        BSE: 0.00045%
                      </td>
                      <td className="p-3 border">
                        NSE: 0.0311%
                        <br />
                        BSE: 0.001%
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">GST</td>
                      <td className="p-3 border" colSpan={2}>
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">SEBI charges</td>
                      <td className="p-3 border" colSpan={2}>
                        ₹10 / crore
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Stamp charges</td>
                      <td className="p-3 border" colSpan={2}>
                        0.0001% or ₹10 / crore on buy side
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {activeTab === "Commodity" && (
                <table className="min-w-full border text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 border"> </th>
                      <th className="p-3 border">Commodity futures</th>
                      <th className="p-3 border">Commodity options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border">Brokerage</td>
                      <td className="p-3 border">
                        0.03% or Rs. 20/executed order whichever is lower
                      </td>
                      <td className="p-3 border">₹20/executed order</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">STT/CTT</td>
                      <td className="p-3 border">
                        0.01% on sell side (Non-Agri)
                      </td>
                      <td className="p-3 border">0.05% on sell side</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Transaction charges</td>
                      <td className="p-3 border">
                        MCX: 0.0021%
                        <br />
                        NSE: 0.0001%
                      </td>
                      <td className="p-3 border">
                        MCX: 0.0418%
                        <br />
                        NSE: 0.001%
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">GST</td>
                      <td className="p-3 border" colSpan={2}>
                        18% on (brokerage + SEBI charges + transaction charges)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">SEBI charges</td>
                      <td className="p-3 border" colSpan={2}>
                        Agri: ₹1 / crore
                        <br />
                        Non-agri: ₹10 / crore
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Stamp charges</td>
                      <td className="p-3 border">
                        0.002% or ₹200 / crore on buy side
                      </td>
                      <td className="p-3 border">
                        0.003% or ₹300 / crore on buy side
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargesTable;
