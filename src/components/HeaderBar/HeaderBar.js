import React from "react";
import { Layout, Row, Col, Menu } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Header } = Layout;
export default function HeaderBar() {
  return (
    <Header>
      <div className="container-fluid">
        <Row justify="space-between" align="center">
          <Col xs={16}>
            <h2 className="logo">Covid Tracking 19</h2>
          </Col>
          <Col xs={8}>
            <h3 className="menu-item">
              Về Tôi <ExclamationCircleOutlined style={{ fontSize: "18px" }} />
            </h3>
          </Col>
        </Row>
      </div>
    </Header>
  );
}
