import React from "react";
import TransactionComponent from "./TransactionComponent";
import { transactions } from "../../../Datas";
const UserTransactions = () => {
    return (
        <div className="bg-zinc-800 p-4 rounded-md space-y-4 flex-[2] text-sm md:text-[1rem]">
            <h3>Latest Transactions</h3>
            <div>
                <table className="w-full">
                    <thead>
                        <tr className="child:text-start">
                            <th>Customer</th>
                            <th className="hidden md:inline-block">Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="pt-3">
                        {transactions.map((trans) => (
                            <TransactionComponent key={trans.id} customer={trans.customer} date={trans.date} amount={trans.amount} status={trans.status} image={trans.img} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTransactions;
