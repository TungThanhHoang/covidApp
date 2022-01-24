import React from "react";
import {  Row } from "antd";
import HightLight from "../HightLight/HightLight";
export default function ContentWrap({ report }) {
  const data = report && report.length ? report[report.length - 1] : "";
  const summary = [
    {
      title: "SỐ CA BỊ NHIỄM",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "SỐ CA ĐIỀU TRỊ",
      count: data.Active,
      type: "actived",
    },
    {
      title: "SỐ CA KhỎI",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "SỐ CA TỬ VONG",
      count: data.Deaths,
      type: "death",
    },
  ];
  return (
    <div className="container-fluid">
      <Row
        gutter={16}
        className="padding-content border-content padding-mobile"
      >
        {summary.map((item, key) => (
          <HightLight
            key={key}
            title={item.title}
            count={item.count}
            type={item.type}
          />
        ))}
      </Row>
    </div>
  );
}
