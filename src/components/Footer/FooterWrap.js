import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
const { Footer } = Layout;
export default function FooterWrap() {
  return (
    <Footer
      style={{ backgroundColor: "#1D1D25", color: "#c7ecee", fontWeight: 500 }}
    >
      <div className="container-fluid">
        <Row justify="space-between" align="middle">
          <Col md={12} xs={24} style={{}}>
            Số liệu covid các thành phố là không đúng !!!
          </Col>
          <Col md={12} xs={24} className="footer">
            <div>Made by</div>{" "}
            <HeartOutlined style={{ padding: ".5rem", color: "#8E1D1D" }} />{" "}
            <div>Thanh Tùng</div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}
