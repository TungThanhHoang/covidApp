import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import LineChart from "./LineChart/LineChart";
import HighMap from "./HighMap/HighMap";
export default function Chart({ report, selectCountryId }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectCountryId) {
      import(
        `@highcharts/map-collection/countries/${selectCountryId}/${selectCountryId}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [selectCountryId]);
  return (
    <div className="container-fluid padding-2 ">
      <Row>
        <Col lg={16} md={24} style={{ paddingRight: "1rem" }}>
          <LineChart data={report} />
        </Col>
        <Col lg={8} sm={24}>
          <HighMap mapData={mapData} />
        </Col>
      </Row>
    </div>
  );
}
