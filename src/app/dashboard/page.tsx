"use client";

import React from "react";
import { CustomCard as Card } from "./components/Card";
import {
  categoryData,
  DashboardCards,
  projectData,
} from "./components/MockData";
import BarChart from "./components/Chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Page() {
  const getColorByProgress = (progress: number, status?: string) => {
    if (progress == 100 || status === "Completed") return "#1A932E";
    if (progress >= 75 || status === "Ongoing") return "#E5AE21";
    if (progress >= 50 || status === "At risk") return "#E5AE21";
    if (progress >= 25 || status === "Delayed") return "#E65F2B";
    return "#EE201C";
  };

  const getColorByStatus = (status: string) => {
    if (status === "Completed") return "#1A932E30";
    if (status === "Ongoing") return "#E5AE2130";
    if (status === "At risk") return "#E5AE2130";
    if (status === "Delayed") return "#E65F2B30";
    return "#EE201C30";
  }


  return (
    <div className="p-8 grid gap-y-8">
      <div className="grid grid-cols-5 items-center gap-4">
        {DashboardCards.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              currentNum={item.currentNum}
              targetNum={item.targetNum}
              ratingNum={item.ratingNum}
              ratingUnit={item.ratingUnit}
              ratingType={item.ratingType}
              width={item.width}
            ></Card>
          );
        })}
      </div>
      <div className="pt-6 pl-4 pb-7 pr-8 shadow-lg rounded-[14px]">
        <p className="leading-[18.75px]">
          <b>Category Breakdown</b>
        </p>
        <div className="flex justify-between items-center pl-[90px] mt-6">
          <BarChart />
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-[80%]">
            {categoryData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-[17px] leading-5"
                >
                  <div className="gap-3 flex items-center">
                    <div
                      className={`p-2 rounded-[10px]`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>{item.description}</div>
                  </div>
                  <div>
                    <b>{`${item.progressive}%`}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt-5 pl-5 pb-8 pr-8 shadow-lg rounded-[14px]">
        <div className="leading-[18.75px] flex justify-between items-center pr-4 p-[10px]">
          <p>
            <b>Recently Activities</b>
          </p>
          <div>Project</div>
          <div>Project Manager</div>
          <div>Status</div>
        </div>
        <Table className="mt-6">
          <TableHeader>
            <TableRow className="text-black">
              <TableHead>Name</TableHead>
              <TableHead>Project Manager</TableHead>
              <TableHead>Due Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.manager}</TableCell>
                  <TableCell>{item.dueStatus.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div
                      className="rounded-full p-1 w-[100px] text-center"
                      style={{
                        backgroundColor: getColorByStatus(
                          item.status
                        ),
                        color: getColorByProgress(0, item.status),
                      }}
                    >
                      {item.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-14 h-14">
                      <CircularProgressbar
                        value={item.progress}
                        text={`${item.progress}%`}
                        styles={buildStyles({
                          textSize: "28px",
                          textColor: getColorByProgress(item.progress),
                          pathColor: getColorByProgress(item.progress),
                        })}
                      ></CircularProgressbar>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
