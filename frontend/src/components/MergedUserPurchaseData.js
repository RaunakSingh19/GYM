import React, { useEffect, useState } from "react";
import axios from "axios";

const MergedUserPurchaseData = () => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchAndMergeData = async () => {
      try {
        const [transactionsRes, purchasesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/transactions"),
          axios.get("http://localhost:5000/api/registrations/all"),
        ]);

        const transactions = transactionsRes.data;
        const purchases = purchasesRes.data;

        // Merge based on matching email
        const merged = purchases.map((purchase) => {
          const matchingTransaction = transactions.find(
            (txn) => txn.email === purchase.email
          );

          return {
            name: purchase.name,
            email: purchase.email,
            phone: purchase.phone,
            servicePlan: purchase.servicePlan,
            price: purchase.price,
            purchaseTime: purchase.purchaseTime,
            expiryTime: purchase.expiryTime,

            // Transaction data (optional)
            address: matchingTransaction?.address || "N/A",
            city: matchingTransaction?.city || "N/A",
            state: matchingTransaction?.state || "N/A",
            zip: matchingTransaction?.zip || "N/A",
            cardName: matchingTransaction?.cardName || "N/A",
            cardNumber: matchingTransaction?.cardNumber
              ? "**** **** **** " + matchingTransaction.cardNumber.slice(-4)
              : "N/A",
            expDate: matchingTransaction?.expMonth && matchingTransaction?.expYear
              ? `${matchingTransaction.expMonth}/${matchingTransaction.expYear}`
              : "N/A",
          };
        });

        setMergedData(merged);
      } catch (error) {
        console.error("Error merging data:", error);
      }
    };

    fetchAndMergeData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Merged Purchase & Transaction Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Plan</th>
            <th>Price</th>
            <th>Purchase Time</th>
            <th>Expiry Time</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Card Name</th>
            <th>Card Number</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {mergedData.length > 0 ? (
            mergedData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.servicePlan}</td>
                <td>{item.price}</td>
                <td>{new Date(item.purchaseTime).toLocaleString()}</td>
                <td>{new Date(item.expiryTime).toLocaleString()}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.zip}</td>
                <td>{item.cardName}</td>
                <td>{item.cardNumber}</td>
                <td>{item.expDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14">No merged data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default MergedUserPurchaseData;
