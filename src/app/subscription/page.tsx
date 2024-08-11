import Header from "@/components/Header";
import React from "react";
import Button from "./components/Button";
import {SubscriptionListTable} from "./components/SubscriptionListTable";
import { columns } from "./components/ColumnData";
import { subscriptionData } from "./components/MockData";

export default function Page() {
    return (
       <div className="pt-[56px] p-8">
            <div className="m-4 float-end">
                <Button title="+Add Subscription"></Button>
            </div>
            <div className="flex gap-4">
                <SubscriptionListTable columns={columns} data={subscriptionData}/>
            </div>
       </div>
    )
}