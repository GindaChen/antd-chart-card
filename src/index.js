import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Radio, Card, Col, Row } from "antd";

import { useMedia } from "react-media";
const { Meta } = Card;

import { Line, Column } from "@ant-design/charts";
import { rangeChartData, lineChartData } from "./mock/mock-range";
import "antd/dist/antd.css";
import "./index.css";

function renderRadar() {
  return null;
}

function renderRangeBarChart() {
  const data = rangeChartData;
  var config = {
    data: data,
    xField: "type",
    yField: "values",
    isRange: true,
    label: {
      position: "top",
      layout: [{ type: "adjust-color" }]
    }
  };
  return <Column {...config} />;
}

function renderLineChart() {
  const data = lineChartData;
  const config = {
    data,
    height: 400,

    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "circle"
    }
  };
  return <Line {...config} />;
}
function handleSizeChange(v) {
  console.log(v);
}

function renderInternal() {
  const style = { margin: 20 };
  var size = "day";

  const a = (
    <Card style={style}>
      <Row>
        <Col style={{ width: "30%" }}>
          <h2>心率</h2>
        </Col>

        <Col style={{ width: "70%" }}>
          <Radio.Group
            style={{ float: "right" }}
            value={size}
            onChange={handleSizeChange}
          >
            <Radio.Button value="day">日</Radio.Button>
            <Radio.Button value="week">周</Radio.Button>
            <Radio.Button value="month">月</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      {renderLineChart()}
    </Card>
  );
  const b = (
    <Card style={style}>
      心率（周视图）
      {renderRangeBarChart()}
    </Card>
  );

  return (
    <div>
      {a}
      {b}
    </div>
  );
}

ReactDOM.render(
  <div className="App">{renderInternal()}</div>,
  document.getElementById("root")
);
