import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Row, Col, Radio } from "antd";
import moment from "moment";
const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYY"));
  return {
    chart: {
      height: 540,
      backgroundColor: "#1E1F26",
      polar: true,
      type: "line",
      style: {
        fontFamily: "Poppins ,sans-serif ",
      },
    },
    title: {
      text: "Số liệu Covid 19",
      style: {
        color: "#fff",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: categories,
      crosshair: true,
      labels: {
        style: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    colors: ["#F4F0F0", "#D08616", "#12B1B9", "#7B3924"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      style: {
        fill: "#fff",
        fontWeight: 300,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 1,
      },
    },
    series: [
      {
        name: "Tổng Ca Nhiễm ",
        colors: "#fff",
        data: data ? data.map((item) => item.Confirmed) : "",
      },
      {
        name: "Tổng Ca Điều Trị",
        data: data ? data.map((item) => item.Active) : "",
      },
      {
        name: "Tổng Ca Khỏi Bệnh",
        data: data ? data.map((item) => item.Recovered) : "",
      },
      {
        name: "Tổng Ca Tử Vong",
        data: data ? data.map((item) => item.Deaths) : "",
      },
    ],
  };
};

export default function LineChart({ data }) {
  const [options, setOptions] = useState({});
  const [reportType, settReportType] = useState("all");
  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(data.length - 30);
        break;
      case "7":
        customData = data.slice(data.length - 7);
        break;
      default:
        customData = data;
        break;
    }
    setOptions(generateOptions(customData));
  }, [data, reportType]);

  return (
    <div>
      <Row>
        <Col md={24} className="btn-report padding-content">
          <Radio.Group defaultValue="all" buttonStyle="solid">
            <Radio.Button value="all" onClick={() => settReportType("all")}>
              Tất cả
            </Radio.Button>
            <Radio.Button value="30" onClick={() => settReportType("30")}>
              30 ngày
            </Radio.Button>
            <Radio.Button value="7" onClick={() => settReportType("7")}>
              7 ngày
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Col lg={24} style={{ borderRadius: "1rem" }}>
        <HighchartsReact
          className="padding-2"
          Highcharts={Highcharts}
          options={options}
        />
      </Col>
    </div>
  );
}
