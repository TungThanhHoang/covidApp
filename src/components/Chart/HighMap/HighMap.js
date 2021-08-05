import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highChartsMap from "highcharts/modules/map";
import { Row, Col } from "antd";
import cloneDeep from "lodash/cloneDeep";

highChartsMap(Highcharts);

const initOptions = {
  chart: {
    height: "600",
    backgroundColor: "#1E1F26",
    fontFamily: "Poppins ,sans-serif ",
  },
  title: {
    text: "Bản đồ ca nhiễm",
    style: {
      color: "#fff",
      fontFamily: "Poppins ,sans-serif ",
    },
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      mapData: {},
      name: "Số ca",
      joinBy: ["hc-key", "key"],
    },
  ],
};
export default function HighMap({ mapData }) {
  const [options, setOptions] = useState({});
  const chartRef = useRef(null);
  const [configLoaded, setConfigLoaded] = useState(false);
  // console.log({ mapData });
  // // return null;
  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));

      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });
      if (!configLoaded) setConfigLoaded(true);
    }
  }, [mapData, configLoaded]);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [mapData]);

  if (!configLoaded) return null;
  return (
    <Row>
      <Col>
        <HighchartsReact
          Highcharts={Highcharts}
          options={cloneDeep(options)}
          constructorType="mapChart"
          ref={chartRef}
        />
      </Col>
    </Row>
  );
}
