import React from "react";

const TransactionComponent = ({ customer, date, amount, status }) => {
    let statusColor = "bg-gray-700";

    if (status === "Approved") {
        statusColor = "bg-emerald-700";
    } else if (status === "Declined") {
        statusColor = "bg-red-700";
    }
    return (
        <tr>
            <td className="flex items-center gap-x-4">
                <img className="rounded-full w-10 h-10 m-2" src="/images/mohammad.png" alt="" />
                <span>{customer}</span>
            </td>
            <td>{date}</td>
            <td>${amount}</td>
            <td>
                <span className={`${statusColor} flex w-24 h-8 rounded-sm items-center justify-center`}>{status}</span>
            </td>
        </tr>
    );
};

export default TransactionComponent;
