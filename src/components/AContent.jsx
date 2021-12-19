import React from "react";
import { Row, Col } from "antd";
import ANav from "./ANav";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import { Routes, Route } from "react-router-dom";
function AContent() {
  return (
    <>
      <Row className="layout__content__row gutter-row">
        <Col span={4} className="layout__content__row__col">
          <ANav />
        </Col>
        <Col span={20} className="gutter-row" style={{paddingLeft:'0.5em'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default AContent;
