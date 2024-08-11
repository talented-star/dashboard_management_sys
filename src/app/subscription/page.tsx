import Header from "@/components/Header";
import React from "react";
import Button from "./components/Button";
import {SubscriptionListTable} from "./components/SubscriptionListTable";
import { columns } from "./components/ColumnData";
import { subscriptionData } from "./components/MockData";
import { X } from "lucide-react";

export default function Page() {
    return (
       <div className="pt-[56px] p-8">
            <div className="m-4 flex justify-end items-center">
                <Button title="+Add Subscription"></Button>
            </div>
            <div className="flex gap-6 justify-between">
                <SubscriptionListTable columns={columns} data={subscriptionData}/>
                <div className="bg-[#222222] w-1/4 rounded-lg p-6 text-white">
                    <div className="flex justify-between items-center ">
                        <h4 className="text-[18px]"><strong>I'm an alert</strong></h4>
                        <X className="hover:text-[#1AB8DB]" size={'32px'}/>
                    </div>
                    <p className="mt-4">Closing me will close any other overlays that might be open.</p>
                </div>
            </div>
       </div>
    )
}