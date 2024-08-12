import React from "react";
import { CustomCardProps } from "./MockDataType";
import { Button } from "@/components/ui/button";

const CustomCard: React.FC<CustomCardProps> = ({ data, key }) => {
  return (
    <div className="rounded-lg shadow-md py-4 px-2 flex justify-between items-center bg-white">
      <div>
        <h2>{data.title}</h2>
        {data.comment !== "" ? (
          <div className="p-1 flex items-center gap-1">
            {data.status === "Disconnect" ? (
              <span className="p-1 rounded-[12px] bg-green-300"></span>
            ) : (
              ""
            )}
            <span className="text-[12px] text-gray-600">{data.comment}</span>
          </div>
        ) : (
          <div>adfadsfas</div>
        )}
      </div>
      <div>
        {data.status === "Connect" ? (
          <Button className="bg-blue-500 text-white">Connect</Button>
        ) : (
          <div>
            {data.manageStatus === true ? (
              <div className="gap-x-2 flex">
                <Button variant="outline">Manage</Button>
                <Button variant="outline">{data.status}</Button>
              </div>
            ) : (
              <Button variant="outline">{data.status}</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
