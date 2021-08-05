import React from "react";
import { Row, Col, Select } from "antd";
import moment from "moment";
import "moment/locale/vi";
const { Option } = Select;
moment.locale("vi");
export default function ContrySelect({ countries, handleOnChange, value }) {
  return (
    <div className="container-fluid  padding  padding-mobile">
      <Row align="middle" className="">
        <Col xs={12} className="padding-2">
          <div className="title">SỐ LIỆU COVID 19 </div>
          <div className="data-time">{moment().format("LLL")} </div>
        </Col>
        <Col xs={12} className="country-select">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            value={value}
            optionFilterProp="children"
            onChange={handleOnChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {countries
              ? countries.map((country, key) => {
                  return (
                    <Option key={key} value={country.ISO2.toLowerCase()}>
                      {country.Country}
                    </Option>
                  );
                })
              : ""}
          </Select>
        </Col>
      </Row>
    </div>
  );
}
