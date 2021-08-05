import "antd/dist/antd.css";
import React from "react";
import { Col, Card, Empty, Row } from "antd";
import {
  RiseOutlined,
  StockOutlined,
  FallOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";
export default function HightLight({ title, count, type }) {
  return (
    <Col
      md={6}
      sm={12}
      xs={24}
      style={{ paddingBottom: ".5rem", padding: "1rem" }}
    >
      <Card
        bordered={false}
        className="card__wrap"
        style={{
          backgroundColor:
            type === "confirmed"
              ? "#204146"
              : type === "actived"
              ? "#F3D9DA"
              : type === "recovered"
              ? "#212E27"
              : "#141923",
          borderBottom:
            type === "confirmed"
              ? ".3rem solid #7AB058"
              : type === "actived"
              ? ".3rem solid #D7BF83"
              : type === "recovered"
              ? ".3rem solid #86A38E"
              : ".3rem solid #941010",
        }}
      >
        <Row align="middle" justify="space-between">
          <Col sm={16}>
            <div
              className="card__title"
              style={{ color: type === "actived" ? "#000" : "#ffff" }}
            >
              {title}
            </div>
            <div className="card__count">
              <CountUp end={count || 0} duration={2} separator=" ">
                {" "}
                {count ? (
                  count
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}{" "}
              </CountUp>
            </div>
          </Col>
          <Col md={8}>
            <div
              className="card__icon"
              style={{
                color:
                  type === "confirmed"
                    ? "#7AB058"
                    : type === "actived"
                    ? "#D7BF83"
                    : type === "recovered"
                    ? "#86A38E"
                    : "#941010",
              }}
            >
              {type === "confirmed" ? (
                <RiseOutlined />
              ) : type === "actived" ? (
                <StockOutlined />
              ) : type === "recovered" ? (
                <FallOutlined />
              ) : type === "death" ? (
                <PlusCircleOutlined />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
